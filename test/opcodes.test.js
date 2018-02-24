import expect from 'expect.js';
import filter from 'lodash.filter';
import CPU from '../src/cpu.js';
import Memory from '../src/memory.js';
import OPCODE from '../const/opcode.js';
import { random8bit } from './utils.js';
import rom from '../roms/flappyboy.json';


describe('CPU can run OPCODES:', () => {
  let cpu, opcodeList, memory;

  beforeEach(() => {
    memory = new Memory(rom);
    cpu = new CPU({
      memory,
    });
  });

  describe('ADD:', () => {
    // Test LD opcodes that load from the next byte into a register.
    opcodeList = filter(OPCODE, {mnemonic: 'ADD', length: 1});
    // temp limit to single register
    opcodeList = filter(opcodeList, ({operand1, operand2}) => operand1.length === 1 && operand2.length === 1 );


    opcodeList.forEach(function(opcode) {
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
        0x3e, 0xff, // LD  a, 255 (62, 255)
        0x87, // ADD a, a (135)
      ];

      // run the opcodes
      opcodes.forEach(function(opcode) {
        cpu.processOpcode(opcode);
      });
      expect(cpu.f & 0b1).to.eql(0b1);
    });

    it('ADD 255, 254; Unsets the carry flag', () => {
      const opcodes = [
        0x3e, 0xff, // LD  a, 255
        0x6, 0xf2, // LD  b, 242
        0x80, // ADD a, b
      ];

      // run the opcodes
      opcodes.forEach(function(opcode) {
        cpu.processOpcode(opcode);
      });

      expect(cpu.f & 0b1).to.eql(0);
    });
  }); // ADD

  describe('SUB:', () => {
    // Test LD opcodes that load from the next byte into a register.
    opcodeList = filter(OPCODE, {mnemonic: 'SUB', length: 1});
    // temp limit to single register
    opcodeList = filter(opcodeList, ({operand1}) => operand1.length === 1);

    opcodeList.forEach(function(opcode) {
      const { addr, mnemonic, operand1 } = opcode;
      const register = operand1.toLowerCase();

      it(`${mnemonic} A, ${operand1}; Subtracts register ${register} from register a [${addr}]`, () => {
        cpu.a = 0x29;
        cpu[register] = 0x11;
        cpu.processOpcode(parseInt(addr, 16));

        // a - a = 0
        if (register === 'a') {
          expect(cpu[register]).to.eql(0);
        }
        else {
          expect(cpu[register]).to.eql(0x18);
        }
      });

      // Subtract Flag (N):
      // This bit is set if a subtraction was performed in the last math instruction.
      it(`${mnemonic} A, ${operand1}; Sets the Subtract Flag N [${addr}]`, () => {
        cpu.a = 0x29;
        cpu[register] = 0x11;
        cpu.processOpcode(parseInt(addr, 16));

        expect(cpu.f & 0b100).to.eql(0b100);
      });
    }); // end forEach opcode
  }); // SUB

  describe('JUMP:', () => {
    it('[0xC3] to address', () => {
      cpu.processOpcode(0xc3); // JUMP opcode
      cpu.processOpcode(0x22); // address one
      cpu.processOpcode(0xaa); // address two
      expect(cpu.pc).to.eql(0x22aa);
    });
  }); // JUMP:

  describe('INC', () => {
    let randomValue;

    beforeEach(() => {
      randomValue = random8bit();
    });

    opcodeList = filter(OPCODE, {mnemonic: 'INC'});
    opcodeList.forEach(function(opcode) {
      const { addr, operand1 } = opcode;
      const register = operand1.toLowerCase();
      const byte = parseInt(addr, 16);

      it(`[${addr}] INC ${operand1}; Increments the value at ${register}`, () => {
        if (register === '(hl)') {
          cpu.hl = 0x0010;
          memory.writeROM(cpu.hl, randomValue);
          cpu.processOpcode(byte);
          expect(memory.readROM(cpu.hl)).to.eql(randomValue + 1);
        }
        else {
          // Set values we want to add together
          cpu[register] = randomValue;
          cpu.processOpcode(byte);
          expect(cpu[register]).to.eql(randomValue + 1);
        }
      });
    });
  }); // INC

  describe('DEC', () => {
    let randomValue;

    beforeEach(() => {
      randomValue = random8bit();
    });

    opcodeList = filter(OPCODE, {mnemonic: 'DEC'});
    opcodeList.forEach(function(opcode) {
      const { addr, operand1 } = opcode;
      const register = operand1.toLowerCase();
      const byte = parseInt(addr, 16);

      it(`[${addr}] DEC ${operand1}; Decrement the value at ${register}`, () => {
        if (register === '(hl)') {
          cpu.hl = 0x0010;
          memory.writeROM(cpu.hl, randomValue);
          cpu.processOpcode(byte);
          expect(memory.readROM(cpu.hl)).to.eql(randomValue - 1);
        }
        else {
          cpu[register] = randomValue;
          cpu.processOpcode(byte);
          expect(cpu[register]).to.eql(randomValue - 1);
        }
      });
    });
  }); // INC

  describe('ADC', () => {
    let randomValue;

    beforeEach(() => {
      randomValue = random8bit();
    });

    opcodeList = filter(OPCODE, {mnemonic: 'ADC'});
    opcodeList.forEach(function(opcode) {
      const { addr, operand2 } = opcode;
      const register = operand2.toLowerCase();
      const byte = parseInt(addr, 16);

      it(`[${addr}] ADC a, ${register}; Adds ${register} to register A`, () => {
        cpu.a = 0x50;

        // Set values we want to add together
        if (register === 'd8') {
          cpu.processOpcode(byte);
          cpu.processOpcode(randomValue);
        }
        else if (register === '(hl)') {
          cpu.hl = 0x0001;
          memory.writeROM(cpu.hl, randomValue);
          cpu.processOpcode(byte);
        }
        else {
          cpu[register] = randomValue;
          cpu.processOpcode(byte);
        }

        expect(cpu.a).to.eql( 0x50 + randomValue);
      });
    });
  });
});
