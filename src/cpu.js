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

  }

  processOpcode(opcode) {
    this.opcodeArray.push(opcode);

    // our object key for the table
    const opKey = this.opcodeArray[0];
    const {length, operand1, operand2} = OPCODE[opKey];

    const regValue1 = this[operand1.toLowerCase()];
    const regValue2 = this[operand2.toLowerCase()];

    // Check our opcode's length...
    const sortOpcodes = () => {
      if (length === 1) {
        if (regValue1 === regValue2 ) {
          this[operand1.toLowerCase()] = regValue1;
        }
        this[operand1.toLowerCase()] = regValue1 + regValue2;
      }

      if (length === 2 && this.opcodeArray.length === 2) {
        if (this.opcodeArray.length === 2) {
          const opcode2 = this.opcodeArray[1];
          console.log(`Opcode ${opcode2}, `)
          const data = this[operand1.toLowerCase()] + opcode2;
          if (data > 0xff) {
            console.log( `this "F" ${data}`);
            this.f = 1;
          }

          this[operand1.toLowerCase()] = data;


          console.log('data', data, OPCODE[this.opcodeArray[0]]);
          this.opcodeArray.length = 0;
        }
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
