
import loadROM from './utils/loadROM.js';

class Memory {

  constuctor(rom) {

      if (!rom) {
        throw new Error('requires ROM');
      }
  }

  readROM() {
    this.data;
  }

  readROMRange() {
    // range to read from
  }

}

export default Memory;
