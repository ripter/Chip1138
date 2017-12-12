import expect from 'expect.js';
import Memory from '../src/memory.js';
// import { random8bit } from './utils.js';
import rom from '../roms/flappyboy.json';

describe.only('Memory', () => {
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

  it('can read ROM TITLE', () => {
    const actual = memory.readROMRange(0x0134, 0x142);
    const expected = new new Uint8Array([0x46, 0x4c, 0x41, 0x50, 0x50, 0x59, 0x42, 0x4f, 0x59]);
    expect(actual).to.eql(expected);
  });
});
