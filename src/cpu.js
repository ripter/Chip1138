/**
 * Virtual CPU for the Gameboy Color; a modified z80
 */
import { OPCODE } from '../const/opcode.js';

// import loadROM from './utils/loadROM.js';
// import rom from '../roms/flappyboy.json';

/**
 * (HL) === Address in memory. reterieve value using value in HL and do with what you wish
 */

/**
 * ADC === Add and carry. check tests for implementation
 */

class CPU {
  constructor({ memory }) {
    // Create the memory banks
    this.memory8bit = new Uint8Array(18);
    this.memory16bit = new Uint16Array(6);

    this.memory = memory;

    // an array to store the opcodes in between calls in order to know how to process
    this.opcodeArray = [];
    this.data = 0;
    this.a = 0x01;
    this.f = 0xb0;

    /*
    /* fullCarry: 0b0001
    /* halfCarry: 0b0010
    /* subtract: 0b0100
    /* zero: 0b1000
     */

    this.masks = {
      full: 0b0001,
      half: 0b0010,
      sub: 0b0100,
      zero: 0b1000,
    };
  }

  /*
  * RESET: tssts length and opcode length, resets this.opcodeArray;
   */
  reset(length) {
    // console.log(`reset? ${this.opcodeArray.length} == ${length}`)
    if (this.opcodeArray.length === length) {
      this.opcodeArray = [];
    }
  }

  adc (keyB) {
    this.a = this.a + this[keyB];
  }

  /*
   * ADD: takes 2 aruguements, gets register values and sets register with sum of values
   */
  add (keyA = 'a', keyB = 'a', length) {
    const valueA = this[keyA];
    const valueB = typeof keyB === 'string' ? this[keyB]: keyB;

    this[keyA] = valueA + valueB;
    this.f = this.f & ~this.masks.sub; // reset back to correct value after tests
    if (this[keyA] >= 254) {
      this.f = this.f | this.masks.full;
    }
    else {
      this.f = this.f & 0b0000;
    }
    // this.f = this.f & this.masks.sub;
    this.reset(length);
  }

  sub (keyA, length) {
    // this.f = this.masks.sub;
    this.f = this.f | 0b100; // set the bit on flag using a bitwise or
    const subSum = this.a - this[keyA];
    this[keyA] = subSum;
    this.reset(length);
  }

  ld (keyA, keyB, length) {
    const opLength = this.opcodeArray.length;
    if (opLength === 2) {
      this[keyA] = this.opcodeArray[1];
    }

    if (length === 1) {
      if (keyB === '(hl)') {
        keyB = keyB.slice(1,3);
        console.log(keyB)
        const address = this[keyB];
        this[keyA] = this.memory.readROM(address);
        console.log('wooooo', this[keyB], this[keyA]);
      }
      else {
        this[keyA] = this[keyB];
      }
    }

    // console.log('Length pre check', opLength);
    if (length === 3 && opLength === length) {
      const firstBit = this.opcodeArray[1];
      const secondBit = this.opcodeArray[2];

      if (keyA === 'sp') {
        this[keyA] = (firstBit << 8) | secondBit;
      }

      else {
        this[keyA[0]] = firstBit;
        this[keyA[1]] = secondBit;
      }
    }
    this.reset(length);
  }

  tick() {
    this.pc +=1;
    this.processOpcode(this.memory.readROM(this.pc));
  }

  //TODO: Add ☠️ 👻 🐶
  processOpcode(opcode) {
    this.opcodeArray.push(opcode);
    // our object key for the table
    const opKey = this.opcodeArray[0];
    const { length, operand1, operand2, mnemonic } = OPCODE[opKey];
    const keyA = operand1.toLowerCase();

    let keyB;
    if (operand2) {
      keyB = operand2.toLowerCase();
    }

    // Check our opcode's length...
    const opLength = this.opcodeArray.length;

    // Sort first by mnemonic
    if (mnemonic === 'ADC') {
      this.adc(keyB)
    }
    if (mnemonic === 'ADD') {
      if (length === 1) {
        this.add(keyA, keyB, length);
        return;
      }

      if (length === 2 && opLength === length) {
        const opcodeData = this.opcodeArray[1];
        this.add(keyA, opcodeData, length);
        return;
      }
    }

    if (mnemonic === 'SUB') {
      // this.sub(opcode, opcodeArray?)
      this.sub(keyA, length);
    }

    if (mnemonic === 'DEC') {
      let register;
      switch (opcode) {
        case 0xb:             // if (0xb === opcode) { register = 'bc'; }
          register = 'bc';
          break;
        case 0x5:             // (0x5 === opcode) && register = 'b';
          register = 'b';
          break;
        case 0xd:             // (0xd === opcode) ? register = 'c' : void 0;
          register = 'c';
          break;
        case 0x1b:            // register = operand1
          register = 'de';
          break;
        case 0x15:            // register = operand1
          register = 'd';
          break;
        case 0x1d:            // register = operand1
          register = 'e';
          break;
        case 0x2b:
          register = 'hl';
          break;
        case 0x25:
          register = 'h';
          break;
        case 0x2d:
          register = 'l';
          break;
        case 0x3b:
          register = 'sp';
          break;
        case 0x3d:
          register = 'a';
          break;
        default:
          // nothing;
      }

      if (opcode === 0x35) {
        const address = this.hl;
        const initialValue = this.memory.readROM(address);
        this.memory.writeROM(address, initialValue - 1);
      }
      else {
        this[register] -= 1;
      }
    }  // register == operand1

    if (mnemonic === 'LD') {
      // this.ld(opcode);
      if (keyB) {
        this.ld(keyA, keyB, length);
      }
    }

    if (mnemonic === 'INC') {
      // this.inc(opcode);
      let register;
      switch (opcode) {
        case 0x3:
          register = 'bc'; // register = operand1
          break;
        case 0x4:
          register = 'b'; // register = operand1
          break;
        case 0xc:
          register = 'c'; // register = operand1
          break;
        case 0x13:
          register = 'de';
          break;
        case 0x14:
          register = 'd';
          break;
        case 0x1c:
          register = 'e';
          break;
        case 0x23:
          register = 'hl';
          break;
        case 0x24:
          register = 'h';
          break;
        case 0x2c:
          register = 'l';
          break;
        case 0x33:
          register = 'sp';
          break;
        case 0x34:
          register = 'hl'; // return to this TODO: here
          break;
        case 0x3c:
          register = 'a';
          break;
        default:
          // nothing;
      }

      if (opcode === 0x34) {
        const address = this.hl;
        const initialValue = this.memory.readROM(address);
        this.memory.writeROM(address, initialValue + 1);
      }
      else {
        this[register] += 1;
      }
    }

    if (mnemonic === 'JUMP') {
      if (opLength === 3) {
        const val = this.opcodeArray[1];
        const val1 = this.opcodeArray[2];
        this.pc = (val << 8) | val1;
      }
    }

    if (mnemonic === 'POP') {
      const address = this.sp;
      const address2 = address + 1;
      this.sp = this.sp + 2;

      this.h = this.memory.readROM(address2);
      this.l = this.memory.readROM(address);
      // this.memory.readROM(this[keyA]);
    }

    if (mnemonic === 'PUSH') {
      const address = this.sp - 1;
      const address2 = address - 1;
      this.sp = this.sp - 2;

      this.memory.writeROM(address, this.a);
      this.memory.writeROM(address2, this.f);
    }

    this.reset(length);
  }


  // 8 Bit regsiters
  get a() {
    return this.memory8bit[0];
  }
  set a(value) {
    this.memory8bit[0] = value;
  }

  get b() {
    return this.memory8bit[1];
  }
  set b(value) {
    this.memory8bit[1] = value;
  }

  get c() {
    return this.memory8bit[2];
  }
  set c(value) {
    this.memory8bit[2] = value;
  }

  get d() {
    return this.memory8bit[3];
  }
  set d(value) {
    this.memory8bit[3] = value;
  }

  get e() {
    return this.memory8bit[4];
  }
  set e(value) {
    this.memory8bit[4] = value;
  }

  get f() {
    return this.memory8bit[5];
  }
  set f(value) {
    this.memory8bit[5] = value;
  }

  get l() {
    return this.memory8bit[6];
  }
  set l(value) {
    this.memory8bit[6] = value;
  }

  get h() {
    return this.memory8bit[7];
  }
  set h(value) {
    this.memory8bit[7] = value;
  }

  // combined 16 bit registers
  // combining 2 8 bit registers to hold 16 bits
  get af() {
    const bitA = this.a;
    const bitF = this.f;
    return (bitA << 8) | bitF;
  }
  set af(value) {
    const bitA = (value >> 8) & 0xff;
    const bitF = value & 0xff;
    this.a = bitA;
    this.f = bitF;
  }

  get bc() {
    const bitB = this.b;
    const bitC = this.c;
    return (bitB << 8) | bitC || 0x0013;
  }
  set bc(value) {
    const bitB = (value >> 8) & 0xff;
    const bitC = value & 0xff;
    this.b = bitB;
    this.c = bitC;
  }

  get de() {
    const bitD = this.d;
    const bitE = this.e;
    return (bitD << 8) | bitE || 0x00d8;
  }
  set de(value) {
    const bitD = (value >> 8) & 0xff;
    const bitE = value & 0xff;
    this.d = bitD;
    this.e = bitE;
  }

  get hl() {
    const bitH = this.h;
    const bitL = this.l;
    return (bitH << 8) | bitL || 0x014d;
  }
  set hl(value) {
    const bitH = (value >> 8) & 0xff;
    const bitL = value & 0xff;
    this.h = bitH;
    this.l = bitL;
  }

  // Alternate register
  get altA() {
    return this.memory8bit[8];
  }

  set altA(value) {
    this.memory8bit[8] = value;
  }

  get altB() {
    return this.memory8bit[9];
  }

  set altB(value) {
    this.memory8bit[9] = value;
  }

  get altD() {
    return this.memory8bit[10];
  }

  set altD(value) {
    this.memory8bit[10] = value;
  }

  get altH() {
    return this.memory8bit[11];
  }

  set altH(value) {
    this.memory8bit[11] = value;
  }

  get altF() {
    return this.memory8bit[12];
  }

  set altF(value) {
    this.memory8bit[12] = value;
  }

  get altC() {
    return this.memory8bit[13];
  }

  set altC(value) {
    this.memory8bit[13] = value;
  }

  get altE() {
    return this.memory8bit[14];
  }

  set altE(value) {
    this.memory8bit[14] = value;
  }

  get altL() {
    return this.memory8bit[15];
  }

  set altL(value) {
    this.memory8bit[15] = value;
  }

  get i () {
    return this.memory16bit[0];
  }

  set i (value) {
    this.memory16bit[0] = value;
  }

  get r () {
    return this.memory16bit[1];
  }

  set r (value) {
    this.memory16bit[1] = value;
  }

  get ix () {
    return this.memory16bit[2];
  }

  set ix (value) {
    this.memory16bit[2] = value;
  }

  get iy () {
    return this.memory16bit[3];
  }

  set iy (value) {
    this.memory16bit[3] = value;
  }

  // Stack pointer, 16 bits
  get sp () {
    return this.memory16bit[4] || 0xFFFE;
  }

  set sp (value) {
    this.memory16bit[4] = value;
  }

  get pc () {
    return this.memory16bit[5] || 0x0100;
  }

  set pc (value) {
    this.memory16bit[5] = value;
  }
}

export default CPU;
