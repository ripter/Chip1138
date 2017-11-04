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
      const { addr, mnemonic, operand1 } = opcode;
      const register = operand1.toLowerCase();

      it(`${mnemonic} ${operand1}, ${randomByte}; loads ${randomByte} into register ${register}  [${addr}]`, () => {
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
      const { addr, mnemonic, operand1, operand2 } = opcode;
      const register = operand1.toLowerCase();
      const register2 = operand2.toLowerCase();

      it(`${mnemonic} ${operand1}, ${operand2}; Adds register ${register2} to register ${register} [${addr}]`, () => {
        // Set values we want to add together
        cpu[register2] = 0x1;
        cpu[register] = 0x2;
        cpu.processOpcode(parseInt(addr, 16));

        if (register === register2) {
          expect(cpu[register]).to.eql(0x4);
        }
        else {
          expect(cpu[register]).to.eql(0x3);
        }
      });

      it(`${mnemonic} ${operand1}, ${operand2}; Clears the Add/Subtract Flag n [${addr}]`, () => {
        // Set values we want to add together
        cpu[register2] = 0x1;
        cpu[register] = 0x2;
        cpu.processOpcode(parseInt(addr, 16));

        expect(cpu.f & 0b10).to.eql(0);
      });
    });

    it('ADD A, 0x33; Adds register a to register a [0xc6]', () => {
      cpu.a = 0x23;
      cpu.processOpcode(0xc6);
      cpu.processOpcode(0x33);

      expect(cpu.a).to.eql(0x56);
    });

    it('ADD 255, 255; Sets the carry flag', () => {
      const opcodes = [
        0x3e, 0xff, // LD  a, 255
        0x87, // ADD a, a
      ];

      // run the opcodes
      opcodes.forEach(function(opcode) {
        cpu.processOpcode(opcode);
      });

      expect(cpu.f & 0b1).to.eql(1);
    });

    it('ADD 255, 254; Unsets the carry flag', () => {
      const opcodes = [
        0x3e, 0xff, // LD  a, 255
        0x6, 0xf2, // LD  b, 254
        0x80, // ADD a, b
      ];

      // run the opcodes
      opcodes.forEach(function(opcode) {
        cpu.processOpcode(opcode);
      });

      expect(cpu.f & 0b1).to.eql(0);
    });
  }); // ADD
});
