
import loadROM from './utils/loadROM.js';

class Memory {

  constructor(rom) {

    if (!rom) {
      throw new Error('requires ROM');
    }

    this.data = loadROM(rom);
  }

  readROM(value) {
    let romValue;
    if (typeof value != 'number') {
      romValue = this.data;
    }
    else {
      romValue = this.data[value];
    }
    return romValue;
  }

  readROMRange(range) {
    // range to read from
    if (!range) {
      throw new Error('please provide a range to return');
    }
    const low = arguments[0];
    const high = arguments[1];
    const length = high - low + 1;
    const tempArray = this.data.slice(low, high + 1);
    let rangeArray = new Uint8Array(length);
    rangeArray.set(tempArray);
    return rangeArray;
  }

}

export default Memory;
