import { readFile } from 'fs/promises';
import { normalize, resolve } from 'path';
import expect from 'expect.js';

import CPU from '../src/cpu.mjs';
import Memory from '../src/memory.mjs';

const ROM = JSON.parse(await readFile(resolve(normalize('./roms/flappyboy.json'))));

/**
 * Phase 1, Issue: "Registers hold zero"
 *
 * Real hardware must be able to hold the value 0 in any register.
 * Today combined/special register getters use a truthiness fallback
 * (e.g. `return (b << 8) | c || 0x0013;`), so a register pair holding
 * 0x0000 incorrectly reads back as its boot value.
 */
describe('CPU registers hold zero', () => {
  let cpu;
  let memory;

  beforeEach(() => {
    memory = new Memory(ROM);
    cpu = new CPU({
      memory,
    });
  });

  describe('boot defaults are set by the constructor', () => {
    it('cpu.a defaults to 0x01', () => {
      expect(cpu.a).to.eql(0x01);
    });
    it('cpu.f defaults to 0xB0', () => {
      expect(cpu.f).to.eql(0xB0);
    });
    it('cpu.bc defaults to 0x0013', () => {
      expect(cpu.bc).to.eql(0x0013);
    });
    it('cpu.de defaults to 0x00D8', () => {
      expect(cpu.de).to.eql(0x00D8);
    });
    it('cpu.hl defaults to 0x014D', () => {
      expect(cpu.hl).to.eql(0x014D);
    });
    it('cpu.sp defaults to 0xFFFE', () => {
      expect(cpu.sp).to.eql(0xFFFE);
    });
    it('cpu.pc defaults to 0x0100', () => {
      expect(cpu.pc).to.eql(0x0100);
    });
  });

  describe('zero is a real value (no truthiness fallbacks)', () => {
    it('cpu.bc reads back 0x0000 when b and c are 0', () => {
      cpu.b = 0;
      cpu.c = 0;
      expect(cpu.bc).to.eql(0x0000);
    });

    it('cpu.bc reads back 0x0000 when set to 0x0000', () => {
      cpu.bc = 0x0000;
      expect(cpu.bc).to.eql(0x0000);
    });

    it('cpu.de reads back 0x0000 when set to 0x0000', () => {
      cpu.de = 0x0000;
      expect(cpu.de).to.eql(0x0000);
    });

    it('cpu.hl reads back 0x0000 when set to 0x0000', () => {
      cpu.hl = 0x0000;
      expect(cpu.hl).to.eql(0x0000);
    });

    it('cpu.sp can hold 0x0000', () => {
      cpu.sp = 0x0000;
      expect(cpu.sp).to.eql(0x0000);
    });

    it('cpu.pc can hold 0x0000 (e.g. a reset vector jump target)', () => {
      cpu.pc = 0x0000;
      expect(cpu.pc).to.eql(0x0000);
    });

    it('a zeroed register keeps working through write + read back', () => {
      cpu.hl = 0x1234;
      cpu.hl = 0x0000;
      expect(cpu.h).to.eql(0x00);
      expect(cpu.l).to.eql(0x00);
      expect(cpu.hl).to.eql(0x0000);
    });
  });
});
