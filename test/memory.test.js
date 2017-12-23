import expect from 'expect.js';
import Memory from '../src/memory.js';
import { random8bit, randomInt } from './utils.js';
import rom from '../roms/flappyboy.json';

describe('Memory', () => {
  let memory;

  beforeEach(() => {
    memory = new Memory(rom);
  });

  it('requires a ROM', () => {
    expect(function() {
      new Memory();
    }).to.throwException(/requires ROM/);
  });

  it('can read from the ROM', () => {
    const actual = memory.readROM(0x0000);
    expect(actual).to.eql(0xc9);
  });

  it('can write to the ROM', () => {
    const byte = random8bit();
    memory.writeROM(0x0000, byte);
    const actual = memory.readROM(0x0000);
    expect(actual).to.eql(byte);
  });

  it('can read ROM TITLE', () => {
    const actual = memory.readROMRange(0x0134, 0x13c);
    const expected = new Uint8Array([0x46, 0x4c, 0x41, 0x50, 0x50, 0x59, 0x42, 0x4f, 0x59]);
    expect(actual).to.eql(expected);
  });


  describe('8 kilobyte Internal Echo', () => {
    const bank1 = [0xE000, 0xFE00];
    const bank2 = [0xC000, 0xDE00];
    const length = bank1[1] - bank2[0];

    // We don't want to test each and every bit, that's 8k of tests!
    // Just pick a few at random.

    for(let i=0; i < 5; i++) {
      const offset = randomInt(0, length);
      const bank1Addr = bank1[0] + offset;
      const bank2Addr = bank2[0] + offset;

      it(`write to 0x${bank1Addr.toString(16)} bank1 updates 0x${bank2Addr.toString(16)}`, () => {
        const byte = random8bit();
        memory.writeROM(bank1Addr, byte);
        const actual = memory.readROM(bank2Addr);
        expect(actual).to.eql(byte);
      });

      it(`write to 0x${bank2Addr.toString(16)} bank1 updates 0x${bank1Addr.toString(16)}`, () => {
        const byte = random8bit();
        memory.writeROM(bank2Addr);
        const actual = memory.readROM(bank1Addr);
        expect(actual).to.eql(byte);
      });
    }

  }); //
});