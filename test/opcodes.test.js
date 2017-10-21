import expect from 'expect.js';
import filter from 'lodash.filter';
import CPU from '../src/cpu.js';
import OPCODE from '../const/opcode.js';


describe('CPU can run OPCODES:', () => {
  let cpu, loadOpcodes;

  beforeEach(() => {
    cpu = new CPU();
  });

  describe('LD:', () => {
    // Test LD opcodes that load from the next byte into a register.
    loadOpcodes = filter(OPCODE, {mnemonic: 'LD', length: 2, operand2: 'd8'});
    // temp limit to single register
    loadOpcodes = filter(loadOpcodes, ({operand1}) => operand1.length === 1 );

    // test that each opcode can load an 8-bit value into a register
    loadOpcodes.forEach(function(opcode) {
      const randomByte = 0|Math.random()*256;
      const { addr, length, mnemonic, operand1 } = opcode;
      const register = operand1.toLowerCase();

      it(`${mnemonic} ${operand1}, ${randomByte}; loads ${randomByte} into register ${register}`, () => {
        cpu.processOpcode(parseInt(addr, 16));
        cpu.processOpcode(randomByte);
        expect(cpu[register]).to.eql(randomByte);
      });
    });
  });



  describe('ADD:', () => {
    // Test LD opcodes that load from the next byte into a register.
    loadOpcodes = filter(OPCODE, {mnemonic: 'ADD', length: 1});
    // temp limit to single register
    loadOpcodes = filter(loadOpcodes, ({operand1, operand2}) => operand1.length === 1 && operand2.length === 1 );


    loadOpcodes.forEach(function(opcode) {
      const { addr, length, mnemonic, operand1, operand2 } = opcode;
      const register = operand1.toLowerCase();
      const register2 = operand2.toLowerCase();

      it(`${mnemonic} ${operand1}, ${operand2}; Adds register ${register2} to register ${register}`, () => {
        // Set values we want to add together
        cpu[register2] = 0x1;
        cpu[register] = 0x2;
        cpu.processOpcode(parseInt(addr, 16));
        expect(cpu[register]).to.eql(0x3);
      });
    });
  }); // ADD

});
