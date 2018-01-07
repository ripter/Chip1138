
import expect from 'expect.js';
import CPU from '../src/cpu.js';
import Memory from '../src/memory.js';
import { random8bit } from './utils.js';

describe('CPU Stack', () => {
  let cpu;

  beforeEach(() => {
    cpu = new CPU();
  });

  /*
  If the AF Register pair contains 2233h and the Stack Pointer contains 1007h,
  then upon the execution of a PUSH AF instruction,
  memory address 1006h contains 22h,
  memory address 1005h contains 33h,
  and the Stack Pointer contains 1005h.
   */
  it('spec example', () => {
    cpu.af = 0x2233;
    cpu.sp = 0x1007;
    cpu.processOpcode(0xf5);
  });
});
