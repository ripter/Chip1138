
import loadROM from './utils/loadROM.js';

class Memory {

  constructor(rom) {

    if (!rom) {
      throw new Error('requires ROM');
    }
    this.data = new Array(0xffff);
    debugger;

    this.rom = loadROM(rom);
    this.data = this.data.map((current, index) => {
      return this.rom[index];
    });
  }

  readROM(address) {
    let romValue;
    // if we used `if (!value)...` we would get a hit on 0 since it's falsey.
    if (typeof address != 'number') {
      // this could throw an error or return the whole rom. I chose return rom to avoid errors
      romValue = this.data; // returns the whole ROM loaded in
    }
    else {
      console.log('readROM', `0x${address.toString(16)}`, `length 0x${this.data.length.toString(16)}`);
      // get our data at the given address in
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
    let rangeArray = new Uint16Array(length);

    // set the values of tempArray into rangeArray
    rangeArray.set(tempArray);
    return rangeArray;
  }

  writeROM(address, data) {
    const echoAddress = address > 0xfe00 ? address - 0x2000 : address + 0x2000;
    // const hexAddress = (address - 0x2000).toString(16);

    console.log(`Address: ${(address).toString(16)}, Echo: ${(echoAddress).toString(16)}`);
    debugger;
    this.data[echoAddress] = data;
    this.data[address] = data;
    debugger;
  }

}

export default Memory;
