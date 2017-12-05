import expect from 'expect.js';
import filter from 'lodash.filter';
import CPU from '../../src/cpu.js';
import OPCODE from '../../const/opcode.js';


describe.only('OPCODE: LD', () => {
  let cpu, opcodes;

  beforeEach(() => {
    // create a new blank CPU for each test.
    cpu = new CPU();
  });


  describe('loads 8-bit value into 8-bit register', () => {
    opcodes = filter(OPCODE, {mnemonic: 'LD', length: 2, operand2: 'd8'});
    // limit to opcodes that work with 8-bit registers
    opcodes = filter(opcodes, ({operand1}) => operand1.length === 1 );

    // Create a test for each opcode
    opcodes.forEach(function(opcode) {
      const randomByte = 0|Math.random()*256;
      const { addr, mnemonic, operand1 } = opcode;
      const register = operand1.toLowerCase();

      it(`${mnemonic} ${operand1}, ${randomByte}; loads ${randomByte} into register ${register}  [${addr}]`, () => {
        cpu.processOpcode(parseInt(addr, 16)); // LD Opcode
        cpu.processOpcode(randomByte); // random 8-bit value
        expect(cpu[register]).to.eql(randomByte);
      });
    });
  }); // loads 8-bit value into 8-bit register

  describe('copies value from one register into another register.', () => {
    opcodes = filter(OPCODE, {mnemonic: 'LD', length: 1});
    // limit to opcodes that work with 8-bit registers
    opcodes = filter(opcodes, ({operand1, operand2}) => operand1.length === 1 && operand2.length === 1);
    // make the data eaiser to work with.
    opcodes = opcodes.map((opcode) => {
      opcode.register1 = opcode.operand1.toLowerCase();
      opcode.register2 = opcode.operand2.toLowerCase();
      opcode.byte = parseInt(opcode.addr, 16);
      return opcode;
    });

    // Create a test for each opcode
    opcodes.forEach(function(opcode) {
      const {mnemonic, register1, register2, addr, byte} = opcode;
      it(`${mnemonic}; replaces value at cpu.${register1} with value at cpu.${register2}  [${addr}]`, () => {
        const randomByte1 = 0|Math.random()*256;
        const randomByte2 = 0|Math.random()*256;
        // set old data in register1 so we can tell if it changed
        cpu[register1] = randomByte1;
        // set the new data in register2
        cpu[register2] = randomByte2;
        // run the opcode
        cpu.processOpcode(byte);
        // check that register1 now has the value from register2
        expect(cpu[register1]).to.eql(randomByte2);
      });
    });
  }); // loads 8-bit value into 8-bit register

}); // OPCODE: LD
