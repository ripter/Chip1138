import expect from 'expect.js';
import CPU from '../src/cpu.js';
import { OPCODE } from '../const/asm.js';


describe('opcodes', () => {
  let cpu;

  beforeEach(() => {
    cpu = new CPU();
  });

  describe('LD', () => {
    it('B, 0x1c ; loads 0x1c into register b', () => {
      cpu.processOpcode(0x06);
      cpu.processOpcode(0x1c);
      expect(cpu.b).to.eql(0x1c);
    });

    it('C, 0xcf; loads 0xcf into register c', () => {
      cpu.processOpcode(0x0e);
      cpu.processOpcode(0xcf);
      expect(cpu.c).to.eql(0xcf);
    });

    it('D, 0xa8; loads 0xa8 into register d', () => {
      cpu.processOpcode(0x16);
      cpu.processOpcode(0xa8);
      expect(cpu.d).to.eql(0xa8);
    });

    it('E, 0xbb; loads 0xbb into register e', () => {
      cpu.processOpcode(0x1e);
      cpu.processOpcode(0xbb);
      expect(cpu.e).to.eql(0xbb);
    });

    it('H, 0x06; loads 0x06 into register h', () => {
      cpu.processOpcode(0x26);
      cpu.processOpcode(0x06);
      expect(cpu.h).to.eql(0x06);
    });

    it('L, 0x16; loads 0x16 into register l', () => {
      cpu.processOpcode(0x2e);
      cpu.processOpcode(0x16);
      expect(cpu.l).to.eql(0x16);
    });
  }); // LD
});
