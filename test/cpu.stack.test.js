
import expect from 'expect.js';
import CPU from '../src/cpu.js';
import Memory from '../src/memory.js';
// import { random8bit } from './utils.js';
import rom from '../roms/flappyboy.json';

describe('CPU Stack', () => {
  let cpu, memory;

  beforeEach(() => {
    memory = new Memory(rom);
    cpu = new CPU({
      memory,
    });
  });

  it('sp defaults to 0xFFFE', () => {
    expect(cpu.sp).to.eql(0xfffe); // largest 16-bit number
  });

  it('pc defaults to 0x0100', () => {
    expect(cpu.pc).to.eql(0x0100); // default in the docs
  });


  /*
    If the AF Register pair contains 0x2233 and the Stack Pointer contains 0x1007,
    then upon the execution of a PUSH AF instruction,
    memory address 0x1006 contains 0x22,
    memory address 0x1005 contains 0x33,
    and the Stack Pointer contains 0x1005.
   */

  describe('0xF5 PUSH AF;', () => {
    beforeEach(() => {
      cpu.af = 0x2233;
      cpu.sp = 0x1007;
      cpu.processOpcode(0xf5); // PUSH AF;
    });

    it('value at address 0x1006 is 0x22', () => {
      const actual = memory.readROM(0x1006);
      expect(actual).to.eql(0x22);
    });

    it('value at address 0x1005 is 0x33', () => {
      const actual = memory.readROM(0x1005);
      expect(actual).to.eql(0x33);
    });

    it('cpu.sp === 0x1005', () => {
      expect(cpu.sp).to.eql(0x1005);
    });
  }); // 0xF5 PUSH AF;

  /*
    If the Stack Pointer contains 0x1000,
    memory location 0x1000 contains 0x55,
    and location 0x1001 contains 0x33,
    the instruction POP HL
    results in register pair HL containing 0x3355,
    and the Stack Pointer containing 0x1002.
   */
   describe('POP HL;', () => {
    beforeEach(() => {
      cpu.sp = 0x1000;
      memory.writeROM(0x1000, 0x55);
      memory.writeROM(0x1001, 0x33);
      cpu.processOpcode(0xe1); // POP HL
    });

    it('cpu.hl === 0x3355', () => {
      expect(cpu.hl).to.eql(0x3355);
    });

    it('cpu.sp === 0x1002', () => {
      expect(cpu.sp).to.eql(0x1002);
    });
   });
});
