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
    it('alternate.a is 8-bit', () => {
      cpu.alternate.a = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.alternate.a).to.eql(0xff); // largest 8-bit number
    });

    it('alternate.b is 8-bit', () => {
      cpu.alternate.b = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.alternate.b).to.eql(0xff); // largest 8-bit number
    });

    it('alternate.d is 8-bit', () => {
      cpu.alternate.d = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.alternate.d).to.eql(0xff); // largest 8-bit number
    });

    it('alternate.h is 8-bit', () => {
      cpu.alternate.h = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.alternate.h).to.eql(0xff); // largest 8-bit number
    });

    it('alternate.f is 8-bit', () => {
      cpu.alternate.f = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.alternate.f).to.eql(0xff); // largest 8-bit number
    });

    it('alternate.c is 8-bit', () => {
      cpu.alternate.c = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.alternate.c).to.eql(0xff); // largest 8-bit number
    });

    it('alternate.e is 8-bit', () => {
      cpu.alternate.e = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.alternate.e).to.eql(0xff); // largest 8-bit number
    });

    it('alternate.l is 8-bit', () => {
      cpu.alternate.l = 0xfff; // 4095 should overflow on 8-bit
      expect(cpu.alternate.l).to.eql(0xff); // largest 8-bit number
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
