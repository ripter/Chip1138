import { readFile } from 'fs/promises';
import { normalize, resolve } from 'path';
import expect from 'expect.js';

import CPU from '../src/cpu.mjs';
import Memory from '../src/memory.mjs';

const ROM = JSON.parse(await readFile(resolve(normalize('./roms/flappyboy.json'))));

/**
 * Phase 1 follow-up, found during the PR #64 code review.
 *
 * Wrap semantics, per Pan Docs (CPU instruction set):
 *   - 8-bit INC/DEC wrap at 8 bits:   0xFF + 1 -> 0x00,  0x00 - 1 -> 0xFF
 *   - 16-bit INC/DEC rr wrap at 16 bits: 0xFFFF <-> 0x0000, no 0x010000/0x10000
 *   - "DEC rr" decrements register pair rr as one 16-bit value
 *
 * The `const/opcode.mjs` table includes:
 *   INC: 0x04 B,  0x0C C,  0x23 HL,  0x33 SP,  0x3C A
 *   DEC: 0x05 B,  0x0B BC, 0x1B DE, 0x2B HL,  0x3B SP
 *
 * Today `dec()` special-cases zero with `this[dest] = 0xff;`, so
 * DEC on a 16-bit register holding 0x0000 produces 0x00FF instead
 * of 0xFFFF (the four red tests below). The plain +/-1 path was
 * already correct: 8-bit regs live in a Uint8Array (wraps -1 -> 0xFF
 * and 256 -> 0x00) and the 16-bit pair setters mask each byte with
 * & 0xff (wraps -1 -> 0xFFFF and 0x10000 -> 0x0000).
 */
describe('CPU: INC of 8-bit registers wraps around at 0xFF', () => {
  let cpu;
  let memory;

  beforeEach(() => {
    memory = new Memory(ROM);
    cpu = new CPU({
      memory,
    });
  });

  it('INC B from 0xFF wraps to 0x00 [0x04]', () => {
    cpu.b = 0xff;
    cpu.processOpcode(0x04); // INC B
    expect(cpu.b).to.eql(0x00);
  });
});

describe('CPU: INC of 16-bit registers wraps around at 0xFFFF', () => {
  let cpu;
  let memory;

  beforeEach(() => {
    memory = new Memory(ROM);
    cpu = new CPU({
      memory,
    });
  });

  it('INC HL from 0xFFFF wraps to 0x0000 [0x23]', () => {
    cpu.hl = 0xffff;
    cpu.processOpcode(0x23); // INC HL
    expect(cpu.hl).to.eql(0x0000);
  });

  it('INC SP from 0xFFFF wraps to 0x0000 [0x33]', () => {
    cpu.sp = 0xffff;
    cpu.processOpcode(0x33); // INC SP
    expect(cpu.sp).to.eql(0x0000);
  });
});

describe('CPU: DEC of 16-bit registers wraps around at 0', () => {
  let cpu;
  let memory;

  beforeEach(() => {
    memory = new Memory(ROM);
    cpu = new CPU({
      memory,
    });
  });

  it('DEC BC from 0x0000 wraps to 0xFFFF [0x0B]', () => {
    cpu.bc = 0x0000;
    cpu.processOpcode(0x0b); // DEC BC
    expect(cpu.bc).to.eql(0xffff);
  });

  it('DEC DE from 0x0000 wraps to 0xFFFF [0x1B]', () => {
    cpu.de = 0x0000;
    cpu.processOpcode(0x1b); // DEC DE
    expect(cpu.de).to.eql(0xffff);
  });

  it('DEC HL from 0x0000 wraps to 0xFFFF [0x2B]', () => {
    cpu.hl = 0x0000;
    cpu.processOpcode(0x2b); // DEC HL
    expect(cpu.hl).to.eql(0xffff);
  });

  it('DEC SP from 0x0000 wraps to 0xFFFF [0x3B]', () => {
    cpu.sp = 0x0000;
    cpu.processOpcode(0x3b); // DEC SP
    expect(cpu.sp).to.eql(0xffff);
  });
});

describe('CPU: DEC of 16-bit registers decrements the pair, not just the low byte', () => {
  let cpu;
  let memory;

  beforeEach(() => {
    memory = new Memory(ROM);
    cpu = new CPU({
      memory,
    });
  });

  // These two stay green while the wrap bug exists; they pin the
  // 16-bit semantics so a fix can't be "cheated" by e.g. treating
  // the pair as two independent 8-bit decrements.
  it('DEC BC (b=0x01, c=0x00) decrements through the carry into B: 0x00FF [0x0B]', () => {
    cpu.bc = 0x0100;
    cpu.processOpcode(0x0b); // DEC BC
    expect(cpu.bc).to.eql(0x00ff);
  });

  it('DEC HL from 0x0001 gives 0x0000 [0x2B]', () => {
    cpu.hl = 0x0001;
    cpu.processOpcode(0x2b); // DEC HL
    expect(cpu.hl).to.eql(0x0000);
  });
});

describe('CPU: DEC of 8-bit registers wraps around at 0 (regression guard)', () => {
  let cpu;
  let memory;

  beforeEach(() => {
    memory = new Memory(ROM);
    cpu = new CPU({
      memory,
    });
  });

  // Already correct today; guards the equivalent 8-bit behavior.
  it('DEC B from 0x00 wraps to 0xFF [0x05]', () => {
    cpu.b = 0x00;
    cpu.processOpcode(0x05); // DEC B
    expect(cpu.b).to.eql(0xff);
  });
});
