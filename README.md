# Chip1138
![travis-ci](https://travis-ci.org/ripter/Chip1138.svg?branch=opcode_load_strikes_back)
[![Coverage Status](https://coveralls.io/repos/github/ripter/Chip1138/badge.svg?branch=master)](https://coveralls.io/github/ripter/Chip1138?branch=master)
Fantasy CPU build for fun and learning.


Now with Travis
And coveralls...

# Getting Started

Run tests to see if everything passes.

```
make test
```

## Testing ROMs

Only use Opensource ROMs or ROMs you have the legal right to use for legal reasons. While building this project, we used several open-source ROMs, including [NES Test ROMS](https://github.com/christopherpow/nes-test-roms) and the fantastic [GBStudio](https://github.com/chrismaltby/gb-studio) which allows people to make new Gameboy games. Some games used for testing, [Deadeus](https://izma.itch.io/deadeus)


# Design

# CPU

The CPU Class runs opcodes on a Memory Class. With a ROM loaded into memory, the CPU's `tick()` function uses the `PC` (program counter) to load and run the next Opcode Instruction Sequence. The `processOpcode` function takes an 8-bit value and assembles it into an Opcode Instruction Sequence. When the sequence is complete, it performs the operation. See [Page 57]("resources/z80 cpu.pdf") (Printed page number is 44, but PDF page number is 57) to learn more about Opcode Instruction Sequence.

# Memory

The Memory Class loads a ROM and initializes the memory state. It provides a standard API for reading/writing to the memory state.


# ROM format

ROMs are loaded from a [Base64](https://en.wikipedia.org/wiki/Base64) string in a [DataURI](https://en.wikipedia.org/wiki/Data_URI_scheme). While larger than a binary format, this format is easier to work within JavaScript.