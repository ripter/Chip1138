
import loadROM from './utils/loadROM.js';

class Memory {

  constuctor(rom) {

    const error = () => {

      if (!rom) {
        throw new Error('requires ROM');
      }
      this.data = loadROM(rom);
    }
    error(rom);
  }

  readROM() {
    this.data;
  }

  readROMRange() {
    // range to read from
  }

}

export default Memory;
