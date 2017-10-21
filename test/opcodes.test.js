import expect from 'expect.js';
import filter from 'lodash.filter';
import CPU from '../src/cpu.js';
import OPCODE from '../const/opcode.js';


describe('CPU can run OPCODES:', () => {
  let cpu;

  beforeEach(() => {
    cpu = new CPU();
  });

    // Test LD opcodes that load from the next byte into a register.
    let loadOpcodes = filter(OPCODE, {mnemonic: 'LD', length: 2, operand2: 'd8'});
    // temp limit to single register
    loadOpcodes = filter(loadOpcodes, (opcode) => { return opcode.operand1.length === 1; });

    // test that each opcode can load an 8-bit value into a register
    loadOpcodes.forEach(function(opcode) {
      const randomByte = 0|Math.random()*256;
      const { addr, length, mnemonic, operand1 } = opcode;
      const register = operand1.toLowerCase();

      console.log(mnemonic, operand1);
      it(`${mnemonic} ${operand1}, ${randomByte}; loads ${randomByte} into register ${register}`, () => {
        cpu.processOpcode(parseInt(addr, 16));
        cpu.processOpcode(randomByte);
        expect(cpu[register]).to.eql(randomByte);
      });
    });

});
