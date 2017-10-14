import expect from 'expect.js';
import filter from 'lodash.filter';
import CPU from '../src/cpu.js';
import OPCODE from '../const/opcode.js';


describe('opcodes', () => {
  let cpu;

  beforeEach(() => {
    cpu = new CPU();
  });

  describe('', () => {
    let loadOpcodes = filter(OPCODE, {mnemonic: 'LD'});
    // let opcodes = {
    //   0x06: ['b'],
    //   0x0e: ['c'],
    //   0x16: ['d'],
    //   0x1e: ['e'],
    //   0x26: ['h'],
    //   0x2e: ['l'],
    //   0x75: ['hl'],
    // };

    // Load Value into Register
    loadOpcodes.forEach(function(item) {
      const randomByte = 0|Math.random()*256;
      const { addr, length, mnemonic, operand1 } = item;

      if (length === 1) {
        it(`${mnemonic} ${operand1}, ${randomByte}; loads ${randomByte} into register ${operand1}`, () => {
          cpu.processOpcode(addr);
          cpu.processOpcode(randomByte);
          expect(cpu[operand1]).to.eql(randomByte);
        });
      }
    });

    // Load Register into Register
    // opcodes = {
    //   0x7f: ['a', 'a'],
    //   0x78: ['a', 'b'],
    //   0x79: ['a', 'c'],
    //   0x7a: ['a', 'd'],
    //   0x7b: ['a', 'e'],
    //   0x7c: ['a', 'h'],
    //   0x7d: ['a', 'l'],
    //   0x7e: ['a', 'hl'],
    //   0x40: ['b', 'b'],
    //   0x41: ['b', 'c'],
    //   0x42: ['b', 'd'],
    //   0x43: ['b', 'e'],
    //   0x44: ['b', 'h'],
    //   0x45: ['b', 'l'],
    //   0x46: ['b', 'hl'],
    //   0x48: ['c', 'b'],
    //   0x49: ['c', 'c'],
    //   0x4a: ['c', 'd'],
    //   0x4b: ['c', 'e'],
    //   0x4c: ['c', 'h'],
    //   0x4d: ['c', 'l'],
    //   0x4e: ['c', 'hl'],
    //   0x50: ['d', 'b'],
    //   0x51: ['d', 'c'],
    //   0x52: ['d', 'd'],
    //   0x53: ['d', 'e'],
    //   0x54: ['d', 'h'],
    //   0x55: ['d', 'l'],
    //   0x56: ['d', 'hl'],
    //   0x58: ['e', 'b'],
    //   0x59: ['e', 'c'],
    //   0x5a: ['e', 'd'],
    //   0x5b: ['e', 'e'],
    //   0x5c: ['e', 'h'],
    //   0x5d: ['e', 'l'],
    //   0x5e: ['e', 'hl'],
    //   0x60: ['h', 'b'],
    //   0x61: ['h', 'c'],
    //   0x62: ['h', 'd'],
    //   0x63: ['h', 'e'],
    //   0x64: ['h', 'h'],
    //   0x65: ['h', 'l'],
    //   0x66: ['h', 'hl'],
    //   0x68: ['l', 'b'],
    //   0x69: ['l', 'c'],
    //   0x6a: ['l', 'd'],
    //   0x6b: ['l', 'e'],
    //   0x6c: ['l', 'h'],
    //   0x6d: ['l', 'l'],
    //   0x6e: ['l', 'hl'],
    //   0x70: ['hl', 'b'],
    //   0x71: ['hl', 'c'],
    //   0x72: ['hl', 'd'],
    //   0x73: ['hl', 'e'],
    //   0x74: ['hl', 'h'],
    //   0x75: ['hl', 'l'],
    // };
  }); // LD
});
