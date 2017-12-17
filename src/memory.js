
import loadROM from './utils/loadROM.js';

class Memory {

  constructor(rom) {

    if (!rom) {
      throw new Error('requires ROM');
    }

    this.data = loadROM(rom);
  }

  readROM(address) {
    let romValue;
    // if we used `if (!value)...` we would get a hit on 0 since it's falsey.
    if (typeof address != 'number') {
      romValue = this.data; // returns the whole ROM loaded in
    }
    else {
      romValue = this.data[address];
    }
    return romValue;
  }

  readROMRange(rangeLow, rangeHigh) {
    // range to read from
    if (!rangeLow && !rangeHigh) {
      throw new Error('please provide a range to return');
    }
    // smallest number of our range
    const low = rangeLow;
    // largest number of our range
    const high = rangeHigh;
    // get our new Array length
    const length = high - low + 1;

    // take our range from the ROM data
    const tempArray = this.data.slice(low, high + 1);
    // create out new typed array
    let rangeArray = new Uint8Array(length);
    // set the values of tempArray into rangeArray
    rangeArray.set(tempArray);
    return rangeArray;
  }

}

export default Memory;
