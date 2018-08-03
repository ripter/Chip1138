import expect from 'expect.js';
import CPU from '../src/cpu.js';
import Memory from '../src/memory.js';
import rom from '../roms/flappyboy.json';

describe('clock', () => {
  let cpu, memory;

  beforeEach(() => {
    memory = new Memory(rom);
    cpu = new CPU({
      memory,
    });
  });

  describe.only('tick()', () => {
    it('first tick() that does nothing but increment pc.', () => {
      // console.log('\none tick() before, cpu.pc', `0x${cpu.pc.toString(16)}`, 'data at pc', `0x${memory.readROM(cpu.pc).toString(16)}`);
      cpu.tick();
      // console.log('\none tick() after, cpu.pc', `0x${cpu.pc.toString(16)}`, 'data at pc', `0x${memory.readROM(cpu.pc).toString(16)}`);
      expect(cpu.pc).to.eql(0x0101);
    });

    it('second tick() that performs a JUMP [0xC3]', () => {
      // console.log('\ntwo tick() before, cpu.pc', `0x${cpu.pc.toString(16)}`, 'data at pc', `0x${memory.readROM(cpu.pc).toString(16)}`);
      // cpu.pc = 0x0100
      cpu.tick(); // Run one tick, which will run JUMP [0xC3]
      // console.log('\ntwo tick() after one, cpu.pc', `0x${cpu.pc.toString(16)}`, 'data at pc', `0x${memory.readROM(cpu.pc).toString(16)}`);
      // cpu.pc = 0x0101; // opcode at this address is JUMP [0xC3]
      cpu.tick(); // Run one tick, which will run JUMP [0xC3]
      // console.log('\ntwo tick() after both, cpu.pc', `0x${cpu.pc.toString(16)}`, 'data at pc', `0x${memory.readROM(cpu.pc).toString(16)}`);
      expect(cpu.pc).to.eql(0x0150); // The new pc after the jump.
    });
  });

});
