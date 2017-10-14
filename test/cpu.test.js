import expect from 'expect.js';
import CPU from '../src/cpu.js';

describe('CPU', () => {
  let cpu;

  beforeEach(() => {
    cpu = new CPU();
  });

  describe('main registers', () => {
    it('a is 8-bit', () => {
      cpu.a = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.a).to.eql(0xff); // largest 8-bit number
    });

    it('b is 8-bit', () => {
      cpu.b = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.b).to.eql(0xff); // largest 8-bit number
    });

    it('d is 8-bit', () => {
      cpu.d = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.d).to.eql(0xff); // largest 8-bit number
    });

    it('h is 8-bit', () => {
      cpu.h = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.h).to.eql(0xff); // largest 8-bit number
    });

    it('f is 8-bit', () => {
      cpu.f = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.f).to.eql(0xff); // largest 8-bit number
    });

    it('c is 8-bit', () => {
      cpu.c = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.c).to.eql(0xff); // largest 8-bit number
    });

    it('e is 8-bit', () => {
      cpu.e = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.e).to.eql(0xff); // largest 8-bit number
    });

    it('l is 8-bit', () => {
      cpu.l = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.l).to.eql(0xff); // largest 8-bit number
    });
  }); // main registers

  describe('alternate registers', () => {
    it('altA is 8-bit', () => {
      cpu.altA = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.altA).to.eql(0xff); // largest 8-bit number
    });

    it('altB is 8-bit', () => {
      cpu.altB = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.altB).to.eql(0xff); // largest 8-bit number
    });

    it('altD is 8-bit', () => {
      cpu.altD = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.altD).to.eql(0xff); // largest 8-bit number
    });

    it('altH is 8-bit', () => {
      cpu.altH = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.altH).to.eql(0xff); // largest 8-bit number
    });

    it('altF is 8-bit', () => {
      cpu.altF = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.altF).to.eql(0xff); // largest 8-bit number
    });

    it('altC is 8-bit', () => {
      cpu.altC = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.altC).to.eql(0xff); // largest 8-bit number
    });

    it('altE is 8-bit', () => {
      cpu.altE = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.altE).to.eql(0xff); // largest 8-bit number
    });

    it('altL is 8-bit', () => {
      cpu.altL = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.altL).to.eql(0xff); // largest 8-bit number
    });
  }); // alternate registers

  describe('special registers', () => {
    it('i is 16-bit', () => {
      cpu.i = 0xfffff; // 1048575 should overflow on 16-bit
      expect(cpu.i).to.eql(0xffff); // largest 16-bit number
    });

    it('r is 16-bit', () => {
      cpu.r = 0xfffff; // 1048575 should overflow on 16-bit
      expect(cpu.r).to.eql(0xffff); // largest 16-bit number
    });

    it('ix is 16-bit', () => {
      cpu.ix = 0xfffff; // 1048575 should overflow on 16-bit
      expect(cpu.ix).to.eql(0xffff); // largest 16-bit number
    });

    it('iy is 16-bit', () => {
      cpu.iy = 0xfffff; // 1048575 should overflow on 16-bit
      expect(cpu.iy).to.eql(0xffff); // largest 16-bit number
    });

    it('sp is 16-bit', () => {
      cpu.sp = 0xfffff; // 1048575 should overflow on 16-bit
      expect(cpu.sp).to.eql(0xffff); // largest 16-bit number
    });
  }); // special registers
});
