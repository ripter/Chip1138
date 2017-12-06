/**
 * Virtual CPU for the Gameboy Color; a modified z80
 */
import { OPCODE } from '../const/opcode.js';

class CPU {
  constructor() {
    // Create the memory banks
    this.memory8bit = new Uint8Array(18);
    this.memory16bit = new Uint16Array(5);

    // an array to store the opcodes in between calls in order to know how to process
    this.opcodeArray = [];
    this.data = 0;

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
   * ADD: takes 2 aruguements, gets register values and sets register with sum of values
   */
  add(keyA = 'a', keyB = 'a') {
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
    this.opcodeArray.length = 0;
  }

  sub(keyA) {
    // this.f = this.masks.sub;
    this.f = this.f | 0b100; // set the bit on flag using a bitwise or
    const subSum = this.a - this[keyA];
    this[keyA] = subSum;
    this.opcodeArray.length = 0;
  }

  ld(keyA) {
    if (this.opcodeArray.length === 2) {
      this[keyA] = this.opcodeArray[1];
    }
    if(this.opcodeArray[1] >= 0xfe) {
      this.f = this.f | this.masks.full;
    }
    this.opcodeArray.length = 0;
  }

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
    const sortOpcodes = () => {
      let opLength = this.opcodeArray.length;

      if (mnemonic === 'SUB') {
        this.sub(keyA);
      }

      if (length === 1) {
        if (mnemonic === 'ADD') {
          this.add(keyA, keyB);
          return;
        }
      }

      if (length === 2 && opLength === 2) {
        if (mnemonic === 'ADD') {
          const opcodeData = this.opcodeArray[1];
          this.add(keyA, opcodeData);
          return;
        }

        if (mnemonic === 'LD') {
          this.ld(keyA);
          return;
        }
      }
    };

    sortOpcodes();
  }

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

  get sp () {
    return this.memory16bit[4];
  }

  set sp (value) {
    this.memory16bit[4] = value;
  }
}

export default CPU;
