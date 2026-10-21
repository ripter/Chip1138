import { readFile } from 'fs/promises';
import { normalize, resolve } from 'path';
import expect from 'expect.js';

import CPU from '../src/cpu.mjs';
import Memory from '../src/memory.mjs';

import {
  FLAG_CARRY, FLAG_HALF_CARRY, FLAG_NEGATIVE, FLAG_ZERO,
} from './utils.mjs';

const ROM = JSON.parse(await readFile(resolve(normalize('./roms/flappyboy.json'))));

/**
 * Phase 2 (Milestone M1) foundation: the F register encoding.
 *
 * Pan Docs (CPU registers & flags):
 * https://gbdev.io/pandocs/CPU_Registers_and_Flags.html
 *
 * Only the TOP nibble of F defines the flags, and the low nibble
 * always reads 0:
 *   0b 0000 0000
 *      bit 7 Z - zero flag
 *      bit 6 N - subtract (negative) flag
 *      bit 5 H - half-carry flag
 *      bit 4 C - carry flag
 *      bits 3-0 unused, always 0
 *
 * The old internal layout stored carry/half/sub/zero in the LOW
 * nibble (0b0001/0b0010/0b0100/0b1000). The boot value F = 0xB0 is
 * the real hardware's boot state (Z, N, and C set) - which only
 * decodes correctly under the Pan Docs layout. This spec pins the
 * real encoding.
 *
 * The per-op flag semantics (which flags each of ADD/ADC/SUB/SBC/CP/
 * INC/DEC sets, half-carry math, flags-as-inputs) are separate
 * follow-up specs inside this same M1 batch.
 */
describe('CPU: the F register value decodes per the Pan Docs layout', () => {
  let cpu;
  let memory;

  beforeEach(() => {
    memory = new Memory(ROM);
    cpu = new CPU({
      memory,
    });
  });

  // Green guard: 0xB0 is already the real hardware's boot state --
  // correct under the real encoding, nonsense under the old one
  // (where bits 5-6 were undefined and C/H were misinterpreted).
  it('boot F = 0xB0 means Z, H, and C set and N clear, low nibble zero', () => {
    expect(cpu.f).to.eql(0xb0); // unchanged default
    expect(cpu.f & FLAG_ZERO).to.eql(FLAG_ZERO);
    expect(cpu.f & FLAG_NEGATIVE).to.eql(0);
    expect(cpu.f & FLAG_HALF_CARRY).to.eql(FLAG_HALF_CARRY);
    expect(cpu.f & FLAG_CARRY).to.eql(FLAG_CARRY);
    expect(cpu.f & 0x0f).to.eql(0); // low nibble unused, always 0
  });
});

describe('CPU: F keeps the low nibble clear after ALU ops', () => {
  let cpu;
  let memory;

  beforeEach(() => {
    memory = new Memory(ROM);
    cpu = new CPU({
      memory,
    });
  });

  // Red now: add()/adc()/sub() write 0b0001, 0b0010 and 0b0100 into
  // the LOW nibble of F. The low nibble of F is unused hardware-wise
  // and must stay 0, so any write there is a bug in disguise -- real
  // code could never read it back as a flag.
  it('ADD A, A with carry leaves the low nibble of F clear [0x87]', () => {
    cpu.f = 0x00;
    cpu.a = 0xff;
    cpu.processOpcode(0x87); // ADD A, A: 0xFF + 0xFF = 0x1FE

    expect(cpu.f & 0x0f).to.eql(0); // red today: F gets 0b0001
  });

  it('ADC A, A with half-carry leaves the low nibble of F clear [0x8F]', () => {
    cpu.f = 0x00; // carry-in 0
    cpu.a = 0x0e;
    cpu.processOpcode(0x8f); // ADC A, A: 0x0E + 0x0E = 0x1C

    expect(cpu.f & 0x0f).to.eql(0); // red today: F gets 0b0010
  });

  it('SUB A, A leaves the low nibble of F clear [0x97]', () => {
    cpu.f = 0x00;
    cpu.a = 0x05;
    cpu.processOpcode(0x97); // SUB A, A: 0x05 - 0x05 = 0x00

    expect(cpu.f & 0x0f).to.eql(0); // red today: F gets 0b100
  });
});
