
import loadROM from './utils/loadROM.js';

class Memory {

  constructor(rom) {

    if (!rom) {
      throw new Error('requires ROM');
    }

    this.data = loadROM(rom);
  }

  readROM(value) {
    debugger;
    let romValue;
    if (typeof value != 'number') {
      romValue = this.data;
    }
    else {
      romValue = this.data[value];
    }
    return romValue;
  }

  readROMRange() {
    // range to read from
  }

}

export default Memory;
