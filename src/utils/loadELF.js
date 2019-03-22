import { readFile } from 'fs';

// Online GCC: https://godbolt.org/
// help from: https://github.com/riscv/riscv-angel/blob/release/elfload.js
//          : https://github.com/indutny/elfy/blob/master/lib/elfy/parser.js

export default function loadELF(filePath) {
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
  let readUInt;

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
    readUInt = data.readUIntLE.bind(data);
  }
  else if (header.isBigEdian) {
    readUInt = data.readUIntBE.bind(data);
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

  header.ei_version = data[0x06];
  header.ei_osabi = data[0x07];
  header.ei_abiversion = data[0x08];
  header.e_type = readUInt(0x10, 2);
  header.e_machine = readUInt(0x12, 2);

  if (header.is32) {
    header.e_entry = readUInt(0x18, 4);
    header.e_phoff = readUInt(0x1C, 4);
    header.e_shoff = readUInt(0x20, 4);
    header.e_flags = readUInt(0x24, 4);
    header.e_ehsize = readUInt(0x28, 2);
    header.e_phentsize = readUInt(0x2A, 2);
    header.e_phnum = readUInt(0x2C, 2);
    header.e_shentsize = readUInt(0x2E, 2);
    header.e_shnum = readUInt(0x30, 2);
    header.e_shstrndx = readUInt(0x32, 2);
  }
  else if (header.is64) {
    // header.e_entry = readUInt(0x18, 8);
    // header.e_phoff = readUInt(0x20, 8);
    // header.e_shoff = readUInt(0x28, 8);
    header.e_flags = readUInt(0x30, 4);
    header.e_ehsize = readUInt(0x34, 2);
    header.e_phentsize = readUInt(0x36, 2);
    header.e_phnum = readUInt(0x38, 2);
    header.e_shentsize = readUInt(0x3A, 2);
    header.e_shnum = readUInt(0x3C, 2);
    header.e_shstrndx = readUInt(0x3E, 2);
  }

  return header;
  /* eslint-enable camelcase */
}

export function fileHeaderToProgramHeaders(fileHeader, data) {
  /* eslint-disable camelcase */
  const offset = fileHeader.e_phoff;
  const numberOfHeaders = fileHeader.e_phnum;
  const readUInt = fileHeader.isLittleEdian ? data.readUIntLE.bind(data) : data.readUIntBE.bind(data);
  let result = [];

  for (let i=0; i < numberOfHeaders; i++) {
    const header = {
      p_type: readUInt(offset + 0x00, 4),
    };

    if (fileHeader.is32) {
      header.p_flags = readUInt(offset + 0x18, 4);
      header.p_offset = readUInt(offset + 0x04, 4);
      header.p_vaddr = readUInt(offset + 0x08, 4);
      header.p_paddr = readUInt(offset + 0x0C, 4);
      header.p_filesz = readUInt(offset + 0x10, 4);
      header.p_memsz = readUInt(offset + 0x14, 4);
      header.p_align = readUInt(offset + 0x1C, 4);
    }
    else if (fileHeader.is64) {
      header.p_flags = readUInt(offset + 0x04, 4);
      header.p_offset = readUInt(offset + 0x08, 8);
      header.p_vaddr = readUInt(offset + 0x10, 8);
      header.p_paddr = readUInt(offset + 0x18, 8);
      header.p_filesz = readUInt(offset + 0x20, 8);
      header.p_memsz = readUInt(offset + 0x28, 8);
      header.p_align = readUInt(offset + 0x30, 8);
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
  const readUInt = fileHeader.isLittleEdian ? data.readUIntLE.bind(data) : data.readUIntBE.bind(data);
  let result = [];

  for (let i=0; i < numberOfHeaders; i++) {
    const header = {
      sh_name: readUInt(offset + 0x00, 4),
      sh_type: readUInt(offset + 0x04, 4),
    };

    if (fileHeader.is32) {
      header.sh_flags = readUInt(offset + 0x08, 4);
      header.sh_addr = readUInt(offset + 0x0C, 4);
      header.sh_offset = readUInt(offset + 0x10, 4);
      header.sh_size = readUInt(offset + 0x14, 4);
      header.sh_link = readUInt(offset + 0x18, 4);
      header.sh_info = readUInt(offset + 0x1C, 4);
      header.sh_addralign = readUInt(offset + 0x20, 4);
      header.sh_entsize = readUInt(offset + 0x24, 4);
    }
    else if (fileHeader.is64) {
      // header.sh_flags = readUInt(offset + 0x08, 8);
      // header.sh_addr = readUInt(offset + 0x10, 8);
      // header.sh_offset = readUInt(offset + 0x18, 8);
      // header.sh_size = readUInt(offset + 0x20, 8);
      header.sh_link = readUInt(offset + 0x28, 4);
      header.sh_info = readUInt(offset + 0x2C, 4);
      // header.sh_addralign = readUInt(offset + 0x30, 8);
      // header.sh_entsize = readUInt(offset + 0x38, 8);
    }
    result.push(header);
  }
  return result;
  /* eslint-enable camelcase */
}

export function readBytes(isLittleEdian, buffer, offset, byteLength) {
  if (isLittleEdian) {
    return buffer.slice(offset, byteLength).reverse();
  }
  return buffer.slice(offset, byteLength);
}
