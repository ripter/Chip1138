import expect from 'expect.js';
import CPU from '../src/z80/cpu.js';
import Memory from '../src/z80/memory.js';
import rom from '../roms/flappyboy.json';

describe('timer', () => {
  let cpu; let
    memory;

  beforeEach(() => {
    memory = new Memory(rom);
    cpu = new CPU({
      memory,
    });
  });

  it('tick() incriments cpu.pc', () => {
    cpu.tick();
    expect(cpu.pc).to.eql(0x0101);
  });
});
