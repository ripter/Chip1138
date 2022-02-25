import { readFile } from 'fs/promises';
import { normalize, resolve } from 'path';
import expect from 'expect.js';

import CPU from '../src/cpu.mjs';
import Memory from '../src/memory.mjs';

// const ROM = null;
const ROM = JSON.parse(await readFile(resolve(normalize('./roms/flappyboy.json'))));

describe('timer', () => {
  let cpu, memory;

  // it('test', () => {
  //   const actual = resolve(normalize('./roms/flappyboy.json'));
  //   expect(actual).to.be('fine')
  // });

  beforeEach(() => {
    memory = new Memory(ROM);
    cpu = new CPU({
      memory,
    });
  });

  it('tick() incriments cpu.pc', () => {
    cpu.tick();
    expect(cpu.pc).to.eql(0x0101);
  });
});
