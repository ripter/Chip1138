
import expect from 'expect.js';
import CPU from '../src/cpu.js';
import Memory from '../src/memory.js';
import { random8bit } from './utils.js';
import rom from '../roms/flappyboy.json';

describe('CPU Stack', () => {
  let cpu, memory;

  beforeEach(() => {
    memory = new Memory(rom);
    cpu = new CPU({
      memory,
    });
  });

  /*
    If the AF Register pair contains 2233h and the Stack Pointer contains 1007h,
    then upon the execution of a PUSH AF instruction,
    memory address 1006h contains 22h,
    memory address 1005h contains 33h,
    and the Stack Pointer contains 1005h.
   */
  
  describe('spec example', () => {
    beforeEach(() => {
      cpu.af = 0x2233;
      cpu.sp = 0x1007;
      cpu.processOpcode(0xf5);
    });

    it('value at address 0x1006 is 0x22', () => {
      const actual = memory.readROM(0x1006);
      expect(actual).to.eql(0x22);
    });

    it('value at address 0x1005 is 0x33', () => {
      const actual = memory.readROM(0x1005);
      expect(actual).to.eql(0x33);
    });

    it('cpu.sp is 0x1005', () => {
      expect(cpu.sp).to.eql(0x1005);
    });
  });
});
