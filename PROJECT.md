# Project goal & working agreement

This file exists so anyone (or any LLM) returning to this repo can restore full context in one read.

## The goal

Chip1138 is a **learning repo**. We end with a fully working Game Boy emulator, written in
standard JavaScript, fully tested — and both contributors level up along the way. Real ROMs
(`flappyboy.gb`, `gbstudio_test.gb`) running correctly in a browser is the finish line.

## Who does what

| Person | Role |
|--------|------|
| **@ripter** (Chris) | **Test writer.** Writes the failing tests. "I make it red." |
| **the other dev** (may drive with an LLM) | **Code writer.** Makes the failing tests pass. "He makes it green." |

The tests are the specification. The code is the implementation. Never the other way around.

## Rules for the code writer (and their LLM)

1. **Never modify, delete, or skip any test.** This includes helpers and fixtures in `test/`.
2. If a test looks wrong: **do not fix it.** Open a GitHub issue titled `[test-bug] ...` with
   the test, why you think it's wrong, and what the spec (Pan Docs) says. Ping @ripter, then stop.
3. Keep changes in scope for the issue you are working (`src/` unless told otherwise).
4. `make test` (lint included) must be fully green before a PR is opened.
5. No new console output / debug leftovers in committed code.

## How work is sequenced

- Work is delivered in **small batches**: each batch = one focused goal = several small
  PR-able issues. Batches target **one thing per PR**.
- Flow: @ripter writes failing tests on a branch (`phase-N-...`) → opens a GitHub issue with
  Context / Tasks / Definition of done (see phase-0 issue #60 and phase-1 issue #63 for the
  format) → the other dev makes it green on that branch → PR titled "Phase N: <thing>" →
  verify-tests-untouched → merge.
- Branch naming: `phase-N-short-name` (e.g. `phase-1-register-zero-values`).

## Roadmap (milestones — each "break" = project works again)

- **M1 — Correct 8-bit ALU:** addition/compare ops wrap at 8 bits, flags (Z/N/H/C) per spec
- **M2 — Registers & 16-bit ops:** honest registers, ADD HL,rr; INC/DEC rr; memory indirection LDs
- **M3 — Full control flow:** conditional JP/JR/CALL/RET/RST/RETI, HALT
- **M4 — CB-prefix ops:** rotations, shifts, SWAP, BIT/SET/RES → **CPU complete** (gate: blargg `cpu_instrs` reports "Passed")
- **M5 — Timer + interrupts:** DIV/TIMA/TMA/TAC, IF/IE/IME, DI/EI, RETI, HALT wake
- **M6 — Cartridge & memory map:** proper regions, MBC1 banking, >32K ROMs
- **M7 — PPU + integration:** tiles → background → sprites → frame buffer; joypad; playable flappyboy

Out of scope by default: APU (audio) — revisit if desired after M7.

## Status (updated per batch)

- Phase 0 — green baseline restored. Done (issue #60, PR #61).
- Phase 1 — "Registers hold zero" **in progress** (issue #63, branch `phase-1-register-zero-values`).
- Next up: ADD/ADC wraparound + full flags (M1).
