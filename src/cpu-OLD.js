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
    this.bitMask = 0b1000;

  }

  processOpcode(opcode) {
    this.opcodeArray.push(opcode);

    // our object key for the table
    const opKey = this.opcodeArray[0];
    const {length, operand1, operand2, mnemonic} = OPCODE[opKey];

    const regValue1 = this[operand1.toLowerCase()];
    let regValue2;

    if (operand2) {
      regValue2 = this[operand2.toLowerCase()];
    }

    if (mnemonic === 'ADD') {
      this.add();
    }
    if (mnemonic === 'LD') {
      this.add();
    }

    if (mnemonic === 'SUB') {
      this.f = 0b10;
      const value1 = this[operand1.toLowerCase()];
      console.log('PRE-SUB....', this.a)
      // debugger;
      this.a = this.a - value1;
      console.log('SUB....', this.a)
      this.sub();
      // this.sub();
    }

    // Check our opcode's length. If we have a 1, we aren't doing another pass so go ahead and process these now.
//     const sortOpcodes = () => {
//       if (length === 1) {
//         if (mnemonic === 'SUB') {
//           this.a = this.a - regValue1;
//         }
// console.log('This is length ', operand1, this.a, regValue1, regValue2)
//
//         if (regValue1 === regValue2 ) {
//           this[operand1.toLowerCase()] = regValue1;
//         }
//         this[operand1.toLowerCase()] = regValue1 + regValue2;
//       }
//
//       /*
//       /* fullCarry: 0b1
//       /* halfCarry: 0b10
//       /* subtract:  0b100
//       /* zero:      0b1000
//       /**/
// console.log(length)
//       // a 2 means we've got out data and instruction and can go a head and process those accordingly...
//       if (length === 2 && this.opcodeArray.length === 2) {
// console.log('In first if.', this.opcodeArray)
//         const opcodeArray = this.opcodeArray;
//
//         opcodeArray.reduce((val, indx, arr) => {
//
//           if(indx === 0) {
//             this.data = OPCODE[val];
//             console.log('Opcode...', val, OPCODE[val]);
// this.add(arr)
//             const { operand1, operand2, mnemonic, length } = this.data;
//
//             if (length === 1) { // Single addr ccodes first
//
//               // Mainly just checking A === A.
//               if (regValue1 === regValue2 ) {
//                 this[operand1.toLowerCase()] = regValue1;
//               }
//               this[operand1.toLowerCase()] = regValue1 + regValue2;
//             }
//
//             console.log('THIS REducers', this.data);
//             if (mnemonic === 'SUB') {
//               console.log('SUB', this.data);
//
//             }
//           }
//           return val;
//         });
//
//         // Subtract commands...
//         // if (mnemonic === 'SUB') {
//         //   this.f = 0b100; // subtraction flag.
//         //   this.data = this[operand1.toLowerCase()];
//         //   this[operand1.toLowerCase()] = this.data;
//         //   if (operand2) {
//         //     this.data = this[operand1.toLowerCase()] - this[operand2.toLowerCase()];
//         //   }
//         // }
//         //
//         // if (mnemonic === 'ADD' || mnemonic === 'LD') {
//         //   this.data = this[operand1.toLowerCase()] + opcode2;
//         // }
//         //
//         // // Full Carry flag: n > 0xff
//         // if (this.data >= 0xff) {
//         //   this.f = 0b1; // Full Carry Flag
//         // }
//         //
//         // // Half carry flag
//         // if (this.data < 0xff && this.data > 95) {
//         //   this.f = 0b10; // 2nd bytes
//         // }
//         //
//         // // Zero flag
//         // if (this.data === 0) {
//         //   this.f = 0b1000; // Zero flag
//         // }
//         //
//         // // Assign our accumulated value to register
//         // this[operand1.toLowerCase()] = this.data;
//         // this.opcodeArray.length = 0;
//
//       }
//     };

    // sortOpcodes();

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

  add(arr) {
    const { length, operand1 } = OPCODE[arr[0]];
    console.log('Add...');

    if (length === 1) {
      console.log('add... length === 1')
      // Mainly just checking A === A.
      if (regValue1 === regValue2 ) {
        this[operand1.toLowerCase()] = regValue1;
      }
      this[operand1.toLowerCase()] = regValue1 + regValue2;

    }
  }

  ld() {
    console.log('Loader...')
  }

  sub() {
    console.log('subtractor....')
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
