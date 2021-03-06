import expect from 'expect.js';
import CPU from '../cpu.js';
import Memory from '../memory.js';
import rom from '../../../roms/flappyboy.json';
// import { pcRuntimeValues } from './utils/pcRuntimeValues.js';

describe('clock', () => {
  let cpu; let
    memory;

  beforeEach(() => {
    memory = new Memory(rom);
    cpu = new CPU({
      memory,
    });
  });

  describe('tick()', () => {
    it('first tick() opcode is NOP, so it only increments PC', () => {
      cpu.tick();
      expect(cpu.pc).to.eql(0x0101);
    });

    it.only('second tick() that performs a JUMP [0xC3]', () => {
      // PC starts at 0100
      expect(cpu.pc).to.eql(0x0100);
      // First tick will read the opcode at 0x0100, in this case it's NOP.
      cpu.tick();
      // tick updates PC each call.
      expect(cpu.pc).to.eql(0x0101);
      // Opcode at 0x0101 is JUMP [0xC3].
      // This single call to tick will run the full opcode, which is several bytes long.
      // Full Opcode is: 0xC3 0x56 0x1
      cpu.tick();
      // The PC should now have the address provided by JUMP.
      expect(cpu.pc).to.eql(0x0156);
    });
  });

  describe('PC during Flappyboy', () => {
    beforeEach(() => {
      memory = new Memory(rom);
      cpu = new CPU({
        memory,
      });
    });

    it('0: tick(), CPU.pc = 0x0100', () => {
      expect(cpu.pc).to.eql(0x0100);
    });

    it('1: tick(), CPU.pc = 0x0101', () => {
      cpu.tick();
      expect(cpu.pc).to.eql(0x0101);
    });

    it('2: tick(), CPU.pc = 0x0150', () => {
      cpu.tick();
      cpu.tick();
      expect(cpu.pc).to.eql(0x0150);
    });

    it('3: tick(), CPU.pc = 0x0151', () => {
      for (let i = 0; i < 3; i++) {
        cpu.tick();
      }
      expect(cpu.pc).to.eql(0x0151);
    });

    it('4: tick(), CPU.pc = 0x0152', () => {
      for (let i = 0; i < 4; i++) {
        cpu.tick();
      }
      expect(cpu.pc).to.eql(0x0152);
    });

    it('5: tick(), CPU.pc = 0x0153', () => {
      for (let i = 0; i < 5; i++) {
        cpu.tick();
      }
      expect(cpu.pc).to.eql(0x0153);
    });

    it('6: tick(), CPU.pc = 0x0156', () => {
      for (let i = 0; i < 6; i++) {
        cpu.tick();
      }
      expect(cpu.pc).to.eql(0x0156);
    });

    it('7: tick(), CPU.pc = 0x0159', () => {
      for (let i = 0; i < 7; i++) {
        cpu.tick();
      }
      expect(cpu.pc).to.eql(0x0159);
    });

    it('8: tick(), CPU.pc = 0x015b', () => {
      for (let i = 0; i < 8; i++) {
        cpu.tick();
      }
      expect(cpu.pc).to.eql(0x015b);
    });

    it('9: tick(), CPU.pc = 0x015d', () => {
      for (let i = 0; i < 9; i++) {
        cpu.tick();
      }
      expect(cpu.pc).to.eql(0x015d);
    });

    it('10: tick(), CPU.pc = 0x015e', () => {
      for (let i = 0; i < 10; i++) {
        cpu.tick();
      }
      expect(cpu.pc).to.eql(0x015e);
    });

    // Check the first 1,000 ticks and the PC values for each
    // pcRuntimeValues.slice(0, 25).forEach((pcValue, tickCount) => {
    //   it(`${tickCount}: tick(), CPU.pc = 0x${pcValue.toString(16)}`, () => {
    //     for (let i = 0; i < tickCount; i++) {
    //       cpu.tick();
    //     }
    //     expect(cpu.pc).to.eql(pcValue);
    //   });
    // });
  });
});
