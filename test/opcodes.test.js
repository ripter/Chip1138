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
    // limit to single letter registers for the moment.
    loadOpcodes = filter(loadOpcodes, ({operand1}) => operand1.length === 1 );
    // Create a test for each opcode
    loadOpcodes.forEach(function(opcode) {
      const randomByte = 0|Math.random()*256;
      const { addr, mnemonic, operand1 } = opcode;
      const register = operand1.toLowerCase();

      // create the test.
      it(`${mnemonic} ${operand1}, ${randomByte}; loads ${randomByte} into register ${register}  [${addr}]`, () => {
        cpu.processOpcode(parseInt(addr, 16));
        cpu.processOpcode(randomByte);
        expect(cpu[register]).to.eql(randomByte);
      });
    });
  }); // LD:

  describe('ADD:', () => {
    // Test ADD opcodes that add two registers together.
    loadOpcodes = filter(OPCODE, {mnemonic: 'ADD', length: 1});
    // limit to just the single letter registers for the moment.
    loadOpcodes = filter(loadOpcodes, ({operand1, operand2}) => operand1.length === 1 && operand2.length === 1 );
    // Create a test for each opcode
    loadOpcodes.forEach(function(opcode) {
      const { addr, mnemonic, operand1, operand2 } = opcode;
      const register = operand1.toLowerCase();
      const register2 = operand2.toLowerCase();

      // Test that it adds
      it(`${mnemonic} ${operand1}, ${operand2}; Adds register ${register2} to register ${register} [${addr}]`, () => {
        // Set values we want to add together
        cpu[register2] = 0x1;
        cpu[register] = 0x2;
        cpu.processOpcode(parseInt(addr, 16));

        // 0x87 adds A to A, so it just doubles the value
        if (register === register2) {
          expect(cpu[register]).to.eql(0x4);
        }
        // Everything else Uses two registers
        else {
          expect(cpu[register]).to.eql(0x3);
        }
      });

      // Subtract Flag (N):
      // This bit is set if a subtraction was performed in the last math instruction.
      it(`${mnemonic} ${operand1}, ${operand2}; Clears the Subtract Flag N [${addr}]`, () => {
        // Set values we want to add together
        cpu[register2] = 0x1;
        cpu[register] = 0x2;
        cpu.processOpcode(parseInt(addr, 16));

        expect(cpu.f & 0b10).to.eql(0);
      });
    }); // end forEach


    it('ADD A, 0x33; Adds 51 to register a [0xc6]', () => {
      [
        0x3e, 0x23, // LD  a, 23
        0xc6, 0x33, // ADD a, 51
      ].forEach(cpu.processOpcode.bind(cpu));

      // 0x23 + 0x33 = 0x56
      expect(cpu.a).to.eql(0x56);
    });

    // Carry Flag (C):
    // This bit is set if a carry occurred from the last math operation or if register A is the smaller value when executing the CP instruction.
    it('ADD 255, 255; Sets the carry flag', () => {
      [
        0x3e, 0xff, // LD  a, 255
        0x87, // ADD a, a
      ].forEach(cpu.processOpcode.bind(cpu));

      // Check that the Carry flag has been set
      expect(cpu.f & 0b1).to.eql(1);
    });

    it('ADD 255, 254; Unsets the carry flag', () => {
      [
        0x3e, 0xff, // LD  a, 255
        0x6, 0xf2, // LD  b, 254
        0x80, // ADD a, b
      ].forEach(cpu.processOpcode.bind(cpu));

      expect(cpu.f & 0b1).to.eql(0);
    });

    // Half Carry Flag (H):
    // This bit is set if a carry occurred from the lower nibble in the last math operation.
    it('ADD 62, 34; Sets the half-carry flag', () => {
      [
        0x3e, 0x3e, // LD  a, 62
        0x6, 0x22, // LD  b, 34
        0x80, // ADD a, b
      ].forEach(cpu.processOpcode.bind(cpu));

      expect(cpu.f & 0b10).to.eql(1);
    });

    it('ADD 62, 33; Clears the half-carry flag', () => {
      [
        0x3e, 0x3e, // LD  a, 62
        0x6, 0x21, // LD  b, 33
        0x80, // ADD a, b
      ].forEach(cpu.processOpcode.bind(cpu));

      expect(cpu.f & 0b10).to.eql(0);
    });

    // Subtract Flag (N):
    // This bit is set if a subtraction was performed in the last math instruction.
    it('ADD 1, 2 ; Clears the subtract flag', () => {
      [
        0x3e, 0x1, // LD  a, 1
        0x6, 0x2, // LD  b, 2
        0x80, // ADD a, b
      ].forEach(cpu.processOpcode.bind(cpu));

      expect(cpu.f & 0b100).to.eql(0);
    });

    // Zero Flag (Z):
    // This bit is set when the result of a math operation is zero or two values match when using the CP instruction.
    it('ADD 255, 1; Sets the zero flag', () => {
      [
        0x3e, 0xff, // LD  a, 255
        0x6, 0x1, // LD  b, 1
        0x80, // ADD a, b
      ].forEach(cpu.processOpcode.bind(cpu));

      expect(cpu.f & 0b1000).to.eql(1);
    });

    it('ADD 1, 2; Clears the zero flag', () => {
      [
        0x3e, 0x1, // LD  a, 1
        0x16, 0x2, // LD  d, 2
        0x82, // ADD a, d
      ].forEach(cpu.processOpcode.bind(cpu));

      expect(cpu.f & 0b1000).to.eql(0);
    });
  }); // ADD

  describe('SUB:', () => {
    loadOpcodes = filter(OPCODE, {mnemonic: 'SUB', length: 1});
    loadOpcodes = filter(loadOpcodes, ({operand1}) => operand1.length === 1);
    loadOpcodes.forEach(function(opcode) {
      const { addr, mnemonic, operand1 } = opcode;
      const register = operand1.toLowerCase();

      it(`${mnemonic} A, ${operand1}; Subtracts register ${register} from register a [${addr}]`, () => {
        cpu.a = 0x29;
        cpu[register] = 0x11;
        cpu.processOpcode(parseInt(addr, 16));

        expect(cpu[register]).to.eql(0x18);
      });

      // Subtract Flag (N):
      // This bit is set if a subtraction was performed in the last math instruction.
      it(`${mnemonic} A, ${operand1}; Sets the Subtract Flag N [${addr}]`, () => {
        cpu.a = 0x29;
        cpu[register] = 0x11;
        cpu.processOpcode(parseInt(addr, 16));

        expect(cpu.f & 0b100).to.eql(1);
      });
    }); // end forEach opcode

    // Carry Flag (C):
    // This bit is set if a carry occurred from the last math operation or if register A is the smaller value when executing the CP instruction.
    it('SUB 255, 255; Sets the carry flag', () => {
      [
        0x3e, 0xff, // LD  a, 255
        0x97, // SUB a, a
      ].forEach(cpu.processOpcode.bind(cpu));

      // Check that the Carry flag has been set
      expect(cpu.f & 0b1).to.eql(1);
    });

    it('SUB 255, 254; Unsets the carry flag', () => {
      [
        0x3e, 0xff, // LD  a, 255
        0x6, 0xf2, // LD  b, 254
        0x90, // SUB a, b
      ].forEach(cpu.processOpcode.bind(cpu));

      expect(cpu.f & 0b1).to.eql(0);
    });

    // Half Carry Flag (H):
    // This bit is set if a carry occurred from the lower nibble in the last math operation.
    it('SUB 62, 34; Sets the half-carry flag', () => {
      [
        0x3e, 0x3e, // LD  a, 62
        0x6, 0x22, // LD  b, 34
        0x90, // SUB a, b
      ].forEach(cpu.processOpcode.bind(cpu));

      expect(cpu.f & 0b10).to.eql(1);
    });

    it('SUB 62, 33; Clears the half-carry flag', () => {
      [
        0x3e, 0x3e, // LD  a, 62
        0x6, 0x21, // LD  b, 33
        0x90, // SUB a, b
      ].forEach(cpu.processOpcode.bind(cpu));

      expect(cpu.f & 0b10).to.eql(0);
    });

    // Subtract Flag (N):
    // This bit is set if a subtraction was performed in the last math instruction.
    it('SUB 1, 2; Sets the subtract flag', () => {
      [
        0x3e, 0x1, // LD  a, 1
        0x6, 0x2, // LD  b, 2
        0x90, // ADD a, b
      ].forEach(cpu.processOpcode.bind(cpu));

      expect(cpu.f & 0b100).to.eql(1);
    });

    // Zero Flag (Z):
    // This bit is set when the result of a math operation is zero or two values match when using the CP instruction.
    it('SUB 42, 42; Sets the zero flag', () => {
      [
        0x3e, 0x2a, // LD  a, 42
        0x16, 0x2a, // LD  d, 42
        0x92, // SUB a, d
      ].forEach(cpu.processOpcode.bind(cpu));

      expect(cpu.f & 0b1000).to.eql(1);
    });

    it('SUB 38, 26; Clears the zero flag', () => {
      [
        0x3e, 0x26, // LD  a, 38
        0xd6, 0x1a // SUB a, 26
      ].forEach(cpu.processOpcode.bind(cpu));

      expect(cpu.f & 0b1000).to.eql(0);
    });
  }); // SUB
});
