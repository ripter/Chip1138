import { readFile } from 'fs';

// help from: https://github.com/riscv/riscv-angel/blob/release/elfload.js
//          : https://github.com/indutny/elfy/blob/master/lib/elfy/parser.js

export default function loadELF(filePath) {
  return new Promise(function(resolve, reject) {
    try {
      readFile(filePath, function(err, data) {
        const header = {};
        if (err) { reject(err); }
        // Check for the ELF header 0x7f454c46 aka ox7f ELF (in ASCII)
        // const magicNumber = data.readIntLE(0, 4);
        const magicNumber = data.slice(0, 4).toString('hex');
        if (magicNumber !== '7f454c46') { reject(`ELF failed magic number test. Found "${magicNumber}"`); }

        // Load the header info into an easier to use object format.
        // reference: https://en.wikipedia.org/wiki/Executable_and_Linkable_Format
        header.ei_class = data[0x04];
        header.ei_data = data[0x05];
        header.ei_version = data[0x06];
        header.ei_osabi = data[0x07];
        header.ei_abiversion = data[0x08]
        header.e_type = data[0x10];

        // Add fun and handy getters because the offical names suck.
        Object.defineProperty(header, 'isLittleEdian', {
          get() { return this.ei_data === 1; }
        });
        Object.defineProperty(header, 'isBigEdian', {
          get() { return this.ei_data === 2; }
        });

        resolve(header);
      });
    } catch (err) {
      reject(`Unknown error loading elf at "${filePath}"\n\t${err}`);
    }
  });
}
