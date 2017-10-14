export const LD {

};

export opcodes {
   0x06: {
     asm: 'LD B, d8; load the next 8bit value into register b',
     parameterCount: 1,
     cycles: 8,
   },
   0x0e: {
     asm: 'LD C, d8; load the next 8bit value into register c',
     parameterCount: 1,
     cycles: 8,
   },
   0x16: {
     asm: 'LD D, d8; load the next 8bit value into register d',
     parameterCount: 1,
     cycles: 8,
   },
   0x1e: {
     asm: 'LD E, d8; load the next 8bit value into register e',
     parameterCount: 1,
     cycles: 8,
   },
};
