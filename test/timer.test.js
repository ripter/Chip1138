import expect from 'expect.js';
import CPU from '../src/cpu.js';
import Memory from '../src/memory.js';
import rom from '../roms/flappyboy.json';

describe('timer', () => {
  let cpu, memory;

  beforeEach(() => {
    memory = new Memory(rom);
    cpu = new CPU({
      memory,
    });
  });

  describe('tick()', () => {
    it('incriments cpu.pc', () => {
      cpu.tick();
      expect(cpu.pc).to.eql(0x0101);
    });

    it('runs opcode at cpu.pc + 1', () => {
      cpu.tick(); // 0x0101: 0xc3
      cpu.tick(); // 0x0102: 0x50
      cpu.tick(); // 0x0103: 0x01
      expect(cpu.pc).to.eql(0x5001);
    });
  });
});
