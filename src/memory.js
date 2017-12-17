
import loadROM from './utils/loadROM.js';

class Memory {

  constuctor(rom) {

    this.error = () => {

      if (typeof rom != 'object') {
        throw new Error('requires ROM');
      }
      this.data = loadROM(rom);
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
