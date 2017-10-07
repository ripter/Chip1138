import expect from 'expect.js';
import CPU from '../src/cpu.js';

describe('CPU', () => {
  let cpu;

  beforeEach(() => {
    cpu = new CPU();
  });

  describe('registers', () => {
    it('a is 8-bit', () => {
      cpu.a = 0xfff; // 4095 should overflow on 8-bit
      const actual = cpu.a;
      expect(actual).to.eql(0xff); // largest 8-bit number
    });
  });
});
