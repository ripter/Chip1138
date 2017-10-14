export const OPCODE = {
  0x06: {
    asm: 'LD B, d8; load the next 8bit value into register b',
    argLength: 1,
    cycles: 8,
  },
  0x0e: {
    asm: 'LD C, d8; load the next 8bit value into register c',
    argLength: 1,
    cycles: 8,
  },
  0x16: {
    asm: 'LD D, d8; load the next 8bit value into register d',
    argLength: 1,
    cycles: 8,
  },
  0x1e: {
    asm: 'LD E, d8; load the next 8bit value into register e',
    argLength: 1,
    cycles: 8,
  },
  0x26: {
    asm: 'LD H, d8; load the next 8bit value into register h',
    argLength: 1,
    cycles: 8,
  },
  0x2e: {
    asm: 'LD L, d8; load the next 8bit value into register l',
    argLength: 1,
    cycles: 8,
  }
};
