import { readFile } from 'fs';

// Online GCC: https://godbolt.org/
// help from: https://github.com/riscv/riscv-angel/blob/release/elfload.js
//          : https://github.com/indutny/elfy/blob/master/lib/elfy/parser.js

export default function loadELF(filePath) {
  let readUInt16;
  return new Promise(function(resolve, reject) {
    try {
      readFile(filePath, function(err, data) {
        // reference: https://en.wikipedia.org/wiki/Executable_and_Linkable_Format
        const header = {};
        if (err) { reject(err); }
        // Check for the ELF header 0x7f454c46 aka ox7f ELF (in ASCII)
        // const magicNumber = data.readIntLE(0, 4);
        const magicNumber = data.slice(0, 4).toString('hex');
        if (magicNumber !== '7f454c46') { reject(`ELF failed magic number test. Found "${magicNumber}"`); }

        // Edian affects reading over 1 byte, so get it early
        header.ei_data = data[0x05];
        // Add fun and handy getters because the offical names suck.
        Object.defineProperties(header, {
          isLittleEdian: { get() {return this.ei_data === 1;} },
          isBigEdian: { get() {return this.ei_data === 2;} },
        });
        // Update our read methods to use the correct edianness
        if (header.isLittleEdian) {
          readUInt16 = data.readUInt16LE.bind(data);
        }
        else if (header.isBigEdian) {
          readUInt16 = data.readUInt16BE.bind(data);
        }

        // check if the file is 32 or 64 bit
        header.ei_class = data[0x04];
        Object.defineProperties(header, {
          is32: { get() {return this.ei_class === 1;} },
          is64: { get() {return this.ei_class === 2;} },
        });

        header.ei_version = data[0x06];
        header.ei_osabi = data[0x07];
        header.ei_abiversion = data[0x08]
        header.e_type = readUInt16(0x10);
        header.e_machine = readUInt16(0x12);


        resolve(header);
      });
    } catch (err) {
      reject(`Unknown error loading elf at "${filePath}"\n\t${err}`);
    }
  });
}
