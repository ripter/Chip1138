import { readFile } from 'fs';

// Online GCC: https://godbolt.org/
// help from: https://github.com/riscv/riscv-angel/blob/release/elfload.js
//          : https://github.com/indutny/elfy/blob/master/lib/elfy/parser.js

export function loadELF(filePath) {
  return new Promise(function(resolve, reject) {
    try {
      readFile(filePath, function(err, data) {
        // reference: https://en.wikipedia.org/wiki/Executable_and_Linkable_Format
        if (err) { reject(err); }
        // Check for the ELF header 0x7f454c46 aka ox7f ELF (in ASCII)
        const magicNumber = data.slice(0, 4).toString('hex');
        if (magicNumber !== '7f454c46') { reject(`ELF failed magic number test. Found "${magicNumber}"`); }

        let header = elfToFileHeader(data);
        header.headers = fileHeaderToProgramHeaders(header, data);
        header.sections = fileHeaderToSectionHeaders(header, data);

        resolve(header);
      });
    }
    catch (err) {
      reject(`Unknown error loading elf at "${filePath}"\n\t${err}`);
    }
  });
}

export function elfToFileHeader(data) {
  /* eslint-disable camelcase */
  const header = {};
  let readInt;

  // Edian affects reading over 1 byte, so get it early
  header.ei_data = data[0x05];
  // Add fun and handy getters because the offical names suck.
  Object.defineProperties(header, {
    isLittleEdian: {
      get() {
        return this.ei_data === 1;
      },
    },
    isBigEdian: {
      get() {
        return this.ei_data === 2;
      },
    },
  });
  // Update our read methods to use the correct edianness
  if (header.isLittleEdian) {
    readInt = data.readIntLE.bind(data);
  }
  else if (header.isBigEdian) {
    readInt = data.readIntBE.bind(data);
  }

  // check if the file is 32 or 64 bit
  header.ei_class = data[0x04];
  Object.defineProperties(header, {
    is32: {
      get() {
        return this.ei_class === 1;
      },
    },
    is64: {
      get() {
        return this.ei_class === 2;
      },
    },
  });

  // Instead of copying bytes from the buffer and putting them in numbers,
  // Let's just return number when requested.
  Object.defineProperties(header, {
    'e_entry': {
      get() {
        return readInt(0x18, 4); // JavaScript doesn't support 64 bit numbers, so stick with 32 bit.
      }
    }
  });


  header.ei_version = data[0x06];
  header.ei_osabi = data[0x07];
  header.ei_abiversion = data[0x08];
  header.e_type = readInt(0x10, 2);
  header.e_machine = readInt(0x12, 2);

  if (header.is32) {
    // header.e_entry = readInt(0x18, 4);
    header.e_phoff = readInt(0x1C, 4);
    header.e_shoff = readInt(0x20, 4);
    header.e_flags = readInt(0x24, 4);
    header.e_ehsize = readInt(0x28, 2);
    header.e_phentsize = readInt(0x2A, 2);
    header.e_phnum = readInt(0x2C, 2);
    header.e_shentsize = readInt(0x2E, 2);
    header.e_shnum = readInt(0x30, 2);
    header.e_shstrndx = readInt(0x32, 2);
  }
  else if (header.is64) {
    // header.e_entry = readInt(0x18, 4);
    header.e_phoff = readInt(0x20, 4);
    header.e_shoff = readInt(0x28, 4);
    header.e_flags = readInt(0x30, 4);
    header.e_ehsize = readInt(0x34, 2);
    header.e_phentsize = readInt(0x36, 2);
    header.e_phnum = readInt(0x38, 2);
    header.e_shentsize = readInt(0x3A, 2);
    header.e_shnum = readInt(0x3C, 2);
    header.e_shstrndx = readInt(0x3E, 2);
  }

  return header;
  /* eslint-enable camelcase */
}

export function fileHeaderToProgramHeaders(fileHeader, data) {
  /* eslint-disable camelcase */
  const offset = fileHeader.e_phoff;
  const numberOfHeaders = fileHeader.e_phnum;
  const readInt = fileHeader.isLittleEdian ? data.readIntLE.bind(data) : data.readIntBE.bind(data);
  let result = [];

  for (let i=0; i < numberOfHeaders; i++) {
    const header = {
      p_type: readInt(offset + 0x00, 4),
    };

    if (fileHeader.is32) {
      header.p_flags = readInt(offset + 0x18, 4);
      header.p_offset = readInt(offset + 0x04, 4);
      header.p_vaddr = readInt(offset + 0x08, 4);
      header.p_paddr = readInt(offset + 0x0C, 4);
      header.p_filesz = readInt(offset + 0x10, 4);
      header.p_memsz = readInt(offset + 0x14, 4);
      header.p_align = readInt(offset + 0x1C, 4);
    }
    else if (fileHeader.is64) {
      header.p_flags = readInt(offset + 0x04, 4);
      header.p_offset = readInt(offset + 0x08, 8);
      header.p_vaddr = readInt(offset + 0x10, 8);
      header.p_paddr = readInt(offset + 0x18, 8);
      header.p_filesz = readInt(offset + 0x20, 8);
      header.p_memsz = readInt(offset + 0x28, 8);
      header.p_align = readInt(offset + 0x30, 8);
    }
    result.push(header);
  }
  return result;
  /* eslint-enable camelcase */
}

export function fileHeaderToSectionHeaders(fileHeader, data) {
  /* eslint-disable camelcase */
  const offset = fileHeader.e_shoff;
  const numberOfHeaders = fileHeader.e_shnum;
  const readInt = fileHeader.isLittleEdian ? data.readIntLE.bind(data) : data.readIntBE.bind(data);
  let result = [];

  for (let i=0; i < numberOfHeaders; i++) {
    const header = {
      sh_name: readInt(offset + 0x00, 4),
      sh_type: readInt(offset + 0x04, 4),
    };

    if (fileHeader.is32) {
      header.sh_flags = readInt(offset + 0x08, 4);
      header.sh_addr = readInt(offset + 0x0C, 4);
      header.sh_offset = readInt(offset + 0x10, 4);
      header.sh_size = readInt(offset + 0x14, 4);
      header.sh_link = readInt(offset + 0x18, 4);
      header.sh_info = readInt(offset + 0x1C, 4);
      header.sh_addralign = readInt(offset + 0x20, 4);
      header.sh_entsize = readInt(offset + 0x24, 4);
    }
    else if (fileHeader.is64) {
      // header.sh_flags = readInt(offset + 0x08, 8);
      // header.sh_addr = readInt(offset + 0x10, 8);
      // header.sh_offset = readInt(offset + 0x18, 8);
      // header.sh_size = readInt(offset + 0x20, 8);
      header.sh_link = readInt(offset + 0x28, 4);
      header.sh_info = readInt(offset + 0x2C, 4);
      // header.sh_addralign = readInt(offset + 0x30, 8);
      // header.sh_entsize = readInt(offset + 0x38, 8);
    }
    result.push(header);
  }
  return result;
  /* eslint-enable camelcase */
}
