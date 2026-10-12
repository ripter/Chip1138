import { OPCODE } from '../const/opcode.mjs';

class Z80 {
  constructor({ memory }) {
    this.memory8bit = new Uint8Array(16);
    this.memory16bit = new Uint16Array(6);

    this.memory = memory;

    this.a = 0x01;
    this.f = 0xb0;

    this.hl = 0x014d;
    this.pc = 0x0100;
    this.sp = 0xFFFE;

    this.ix = 0;
    this.iy = 0;

    this.i = 0;
    this.r = 0;

    this.im = 0;
    this.intMode = 0;

    this.iff1 = false;
    this.iff2 = false;
    this.interruptEnabled = true;

    this.halted = false;
    this.stopped = false;

    this.opcodeBuffer = [];
  }

  get a() { return this.memory8bit[0]; }
  set a(v) { this.memory8bit[0] = v; }

  get f() { return this.memory8bit[1]; }
  set f(v) { this.memory8bit[1] = v; }

  get b() { return this.memory8bit[2]; }
  set b(v) { this.memory8bit[2] = v; }

  get c() { return this.memory8bit[3]; }
  set c(v) { this.memory8bit[3] = v; }

  get d() { return this.memory8bit[4]; }
  set d(v) { this.memory8bit[4] = v; }

  get e() { return this.memory8bit[5]; }
  set e(v) { this.memory8bit[5] = v; }

  get h() { return this.memory8bit[6]; }
  set h(v) { this.memory8bit[6] = v; }

  get l() { return this.memory8bit[7]; }
  set l(v) { this.memory8bit[7] = v; }

  get alt_a() { return this.memory8bit[8]; }
  set alt_a(v) { this.memory8bit[8] = v; }

  get alt_b() { return this.memory8bit[9]; }
  set alt_b(v) { this.memory8bit[9] = v; }

  get alt_d() { return this.memory8bit[10]; }
  set alt_d(v) { this.memory8bit[10] = v; }

  get alt_h() { return this.memory8bit[11]; }
  set alt_h(v) { this.memory8bit[11] = v; }

  get alt_f() { return this.memory8bit[12]; }
  set alt_f(v) { this.memory8bit[12] = v; }

  get alt_c() { return this.memory8bit[13]; }
  set alt_c(v) { this.memory8bit[13] = v; }

  get alt_e() { return this.memory8bit[14]; }
  set alt_e(v) { this.memory8bit[14] = v; }

  get alt_l() { return this.memory8bit[15]; }
  set alt_l(v) { this.memory8bit[15] = v; }

  get bc() {
    return (this.b << 8) | this.c || 0x0013;
  }
  set bc(v) {
    this.b = (v >> 8) & 0xff;
    this.c = v & 0xff;
  }

  get de() {
    return (this.d << 8) | this.e || 0x00d8;
  }
  set de(v) {
    this.d = (v >> 8) & 0xff;
    this.e = v & 0xff;
  }

  get hl() {
    return (this.h << 8) | this.l || 0x014d;
  }
  set hl(v) {
    this.h = (v >> 8) & 0xff;
    this.l = v & 0xff;
  }

  get ix() { return this.memory16bit[0]; }
  set ix(v) { this.memory16bit[0] = v; }

  get iy() { return this.memory16bit[1]; }
  set iy(v) { this.memory16bit[1] = v; }

  get sp() { return this.memory16bit[2] || 0xFFFE; }
  set sp(v) { this.memory16bit[2] = v; }

  get pc() { return this.memory16bit[3] || 0x0100; }
  set pc(v) { this.memory16bit[3] = v; }

  get i() { return this.memory16bit[4]; }
  set i(v) { this.memory16bit[4] = v; }

  get r() { return this.memory16bit[5]; }
  set r(v) { this.memory16bit[5] = v; }

  adc(opcode, byte1) {
    const meta = OPCODE[opcode];
    const source = meta.operand2.toLowerCase();
    let value;
    console.log('ADC', source, byte1);

    switch (source) {
      case 'd8':
        value = this.a + byte1;
        break;
      case '(hl)':
        value = this.a + this.memory.readROM(this.hl);
        break;
      default:
        value = this.a + this[source];
    }

    value += this.f & 0b0001;

    if (value > 0xFF) {
      this.f |= 0b0001;
    }
    if (value > 0x0F) {
      this.f |= 0b0010;
    }

    const a = this.a;
    const op = byte1;
    const hc = (a & 0xF) + (op & 0xF) > 0xF;
    if (hc) this.f |= 0b0010;

    this.a = value & 0xFF;

    if (this.a === 0) this.f |= 0b1000;
    else this.f &= 0b0111;

    this.f &= 0b1111;
  }

  add(opcode, byte1) {
    const meta = OPCODE[opcode];
    const dest = meta.operand1.toLowerCase();
    const source = meta.operand2.toLowerCase();
    let value;
    console.log('ADD', dest, source, byte1);

    switch (source) {
      case 'd8':
        value = this[dest] + byte1;
        break;
      default:
        value = this[dest] + this[source];
    }

    if (value > 0xFF) {
      this.f |= 0b0001;
    } else {
      this.f &= 0b1110;
    }

    this[dest] = value & 0xFF;

    if (this[dest] === 0) this.f |= 0b1000;
    else this.f &= 0b0111;

    const d = this[dest];
    const s = this[source] || 0;
    if ((d & 0xF) + (s & 0xF) > 0xF) this.f |= 0b0010;
    else this.f &= 0b1111;
  }

  sub(opcode) {
    const meta = OPCODE[opcode];
    const source = meta.operand1.toLowerCase();
    const value = this[source];
    console.log('SUB', source, value);

    this.a -= value;

    this.f |= 0b100;

    const a = this.a;
    const s = value;
    if ((a & 0xF) > (s & 0xF)) this.f |= 0b0010;
    else this.f &= 0b1111;

    if (this.a === 0) this.f |= 0b1000;
    else this.f &= 0b0111;

    if (this.a > 0xFF) this.f |= 0b0001;
    else this.f &= 0b1110;
  }

  ld(opcode, byte1, byte2) {
    const meta = OPCODE[opcode];
    const dest = meta.operand1.toLowerCase();
    const source = meta.operand2.toLowerCase();
    let value;
    console.log('LD', dest, source, byte1, byte2);

    switch (source) {
      case 'd8':
        value = byte1;
        break;
      case 'd16':
        value = (byte1 << 8) | byte2;
        break;
      case '(hl)':
        value = this.memory.readROM(this.hl);
        break;
      default:
        value = this[source];
    }

    this[dest] = value;
  }

  inc(opcode) {
    const meta = OPCODE[opcode];
    const dest = meta.operand1.toLowerCase();
    console.log('INC', dest);

    if (dest === '(hl)') {
      let value = this.memory.readROM(this.hl);
      value += 1;
      this.memory.writeROM(this.hl, value);
      if ((value & 0xFF) === 0) this.f |= 0b1000;
      else this.f &= 0b0111;
      this.f &= 0b1110;
    } else {
      this[dest] += 1;
      if (this[dest] === 0) this.f |= 0b1000;
      else this.f &= 0b0111;
      this.f &= 0b1110;
    }
  }

  dec(opcode) {
    const meta = OPCODE[opcode];
    const dest = meta.operand1.toLowerCase();
    console.log('DEC', dest);

    if (dest === '(hl)') {
      let value = this.memory.readROM(this.hl);
      value -= 1;
      this.memory.writeROM(this.hl, value);
      if ((value & 0xFF) === 0) this.f |= 0b1000;
      else this.f &= 0b0111;
      this.f &= 0b1110;
    } else {
      this[dest] -= 1;
      if (this[dest] === 0) this.f |= 0b1000;
      else this.f &= 0b0111;
      this.f &= 0b1110;
    }
  }

  nop() {}

  jump(opcode, byte1, byte2) {
    this.pc = (byte2 << 8) | byte1;
    console.log('JUMP', this.pc);
  }

  tick() {
    let opcode = this.memory.readROM(this.pc);
    const length = OPCODE[opcode]?.length ?? 0;
    console.log('TICK', this.pc, opcode, length);

    for (let i = 0; i < length; i++) {
      this.pc += 1;
      this.processOpcode(opcode);
      opcode = this.memory.readROM(this.pc);
    }
  }

  processOpcode(opcode) {
    const opcodeBuffer = this.opcodeBuffer;
    opcodeBuffer.push(opcode);
    console.log('PROCESS OPCODE', opcodeBuffer, this.pc);

    const meta = OPCODE[opcodeBuffer[0]];
    const { length } = meta;
    const mnemonic = meta.mnemonic.toLowerCase();

    if (opcodeBuffer.length < length) {
      return;
    }

    try {
      this[mnemonic].apply(this, opcodeBuffer);
    } catch (error) {
      throw new Error(`Unsupported Opcode: "${mnemonic}"`);
    }

    this.opcodeBuffer = [];
  }
}

export default Z80;