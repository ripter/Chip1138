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
  }

  /*
   * ADD: takes 2 aruguements, gets register values and sets register with sum of values
   */
  add(keyA = 'a', keyB = 'a') {
    const valueA = this[keyA];
    // console.log('key A:', keyA);

    const valueB = typeof keyB === 'string' ? this[keyB]: keyB;
    this[keyA] = valueA + valueB;
    console.log('key a:', this[keyA]);
  }

  processOpcode(opcode) {
    this.opcodeArray.push(opcode);

    // our object key for the table
    const opKey = this.opcodeArray[0];
    const { length, operand1, operand2, mnemonic } = OPCODE[opKey];
    const keyA = operand1.toLowerCase();
    const keyB = operand2.toLowerCase();

    // const regValue1 = this[keyA];
    let valueB;

    if (!operand2) {
      valueB = this[keyB];
    }

    console.log(operand2.length)

    console.log('Opera 2:', operand2);
    // Check our opcode's length...
    const sortOpcodes = () => {
      if (mnemonic === 'ADD') {
        if (length === 1) {
          this.add(keyA, keyB);
          // console.log('mnemonic', mnemonic);
        }

        if (length === 2 && this.opcodeArray.length === 2) {
          // TODO: get valueB
          const opcodeByte = this.opcodeArray[1];
          console.log('calling ADD w opCodeByte', opcodeByte);
          this.add(keyA, opcodeByte);
        }
      }



      /*
      /* fullCarry: 0b0001
      /* halfCarry: 0b0010
      /* subtract: 0b0100
      /* zero: 0b1000
       */
      // console.log('Mnemonic...',mnemonic.toLowerCase(), this.f)
      if (mnemonic === 'SUB') {
        const subMask = 0b0100;
        this.f = this.f | subMask;
        // console.log(`f reg === ${this.f}`);
        const subSum = this[operand1.toLowerCase()] - valueB;
        this[keyA] = subSum;
        // console.log('SUB', this.f);
      }

      if (length === 2 && this.opcodeArray.length === 2) {

        // const opcode2 = this.opcodeArray[1];

        // console.log(`Opcode ${opcode2}, `)
        if (mnemonic === 'ADD' || mnemonic === 'LD') {
          // this.data = this[keyA] + opcode2;
        }

        if (this.data >= 0xff) {
          // console.log( `this "F" ${data}`);
          this.f = 0b0001;
        }

        if (this.data < 0xff) {
          // console.log( `this "F" ${data}`);
          this.f = 0b0000;
        }

        this[operand1.toLowerCase()] = this.data;
        // console.log('data', data, OPCODE[this.opcodeArray[0]]);
        this.opcodeArray.length = 0;

        if (this.data < 0xff){
          // console.log( `this "F" ${data}`);
          this.f = 0b0000;
        }

        this[operand1.toLowerCase()] = this.data;
        // console.log('data', data, OPCODE[this.opcodeArray[0]]);
        this.opcodeArray.length = 0;
      }
    };

    sortOpcodes();

    // if (this.opcodeArray.length === 2) {
    //   const currentOpcode = OPCODE[this.opcodeArray[0]];
    //   const data = this.opcodeArray[1];
    //   this[currentOpcode.operand1.toLowerCase()] = data;
    //
    //   // The preferred method to empty an array. As opposed to
    //   // this.opcodeArray = [], which is creating a new, empty array.
    //   this.opcodeArray.length = 0;
    // }
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
