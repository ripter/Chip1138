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

  it('tick() incriments cpu.pc', () => {
    cpu.tick();
    expect(cpu.pc).to.eql(0x0101)
  });

});
