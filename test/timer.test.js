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

    it('JUMP with tick()', () => {
      cpu.pc = 0x0101; // opcode at this address is 0xC3 JUMP
      cpu.tick(); // Run one tick, which will run JUMP
      expect(cpu.pc).to.eql(0x0150); // The new pc after the jump.
    });
  });

});
