import path from 'path';
import expect from 'expect.js';
import { loadELF, readBytes } from './loadELF.js';
const FILE_PATH = path.join(process.cwd(), '/roms/vmlinux');

describe.only('loadELF("roms/vmlinux")', () => {
  it('sets isBigEdian and isLittleEdian', () => {
    return loadELF(FILE_PATH)
      .then((actual) => {
        expect(actual.isBigEdian).to.eql(false);
        expect(actual.isLittleEdian).to.eql(true);
      })
      .catch((e) => {
        expect().to.fail(e);
      });
  });
  it('uses RISC-V instruction set architecture', () => {
    return loadELF(FILE_PATH)
      .then((actual) => {
        expect(actual.e_machine).to.eql(0xF3);
      })
      .catch((e) => {
        expect().to.fail(e);
      });
  });
  it('sets is32 and is46', () => {
    return loadELF(FILE_PATH)
      .then((actual) => {
        expect(actual.is32).to.eql(false);
        expect(actual.is64).to.eql(true);
      })
      .catch((e) => {
        expect().to.fail(e);
      });
  });

  describe.only('readBytes', () => {
    const buffer = Buffer.from([0x7f, 0x45, 0x4c, 0x46, 0xAA, 0xBB, 0xCC, 0xDD]);

    it('2 bytes: Little Edian', () => {
      const actual = readBytes(true, buffer, 0, 2);
      expect(actual).to.eql(0x457F);
      expect(actual).to.eql(buffer.readUIntLE(0, 2));
    });

    it('2 bytes: Big Edian', () => {
      const actual = readBytes(false, buffer, 0, 2);
      expect(actual).to.eql(0x7F45);
      expect(actual).to.eql(buffer.readUIntBE(0, 2));
    });

    it('4 bytes: Little Edian', () => {
      const actual = readBytes(true, buffer, 0, 4);
      expect(actual).to.eql(0x464c457f);
      expect(actual).to.eql(buffer.readUIntLE(0, 4));
    });

    it('4 bytes: Big Edian', () => {
      const actual = readBytes(false, buffer, 0, 4);
      expect(actual).to.eql(0x7f454c46);
      expect(actual).to.eql(buffer.readUIntBE(0, 4));
    });

    it('8 bytes: Little Edian', () => {
      const actual = readBytes(true, buffer, 0, 8);
      expect(actual).to.eql(0xDDCCBBAA464c457f);
    });

    it('8 bytes: Big Edian', () => {
      const actual = readBytes(false, buffer, 0, 8);
      expect(actual).to.eql(0x7f454c46AABBCCDD);
    });

  });

  it('loads roms/vmlinux', () => {
    /* eslint-disable camelcase */
    return loadELF(FILE_PATH)
      .then((data) => {
        const actual = data;
        expect(actual).to.eql({
          ei_data: 1,
          ei_class: 2,
          ei_version: 1,
          ei_osabi: 0,
          ei_abiversion: 0,
          e_type: 2,
          e_machine: 0xF3,
          e_entry: 0x2000,
          e_phoff: 0x40,
          e_shoff: 0x2741F8,
          e_flags: 0,
          e_ehsize: 64, // hex is 0x40. the value is 32 or 64
          e_phentsize: 0x38,
          e_phnum: 4,
          e_shentsize: 0x40,
          e_shnum: 0x12,
          e_shstrndx: 0xF,
          headers: [{
            p_type: 1,
            p_flags: 7,
            p_offset: 0,
            p_vaddr: 0xFFFFFFFF80000000,
            p_paddr: 0,
            p_filesz: 0x25D6D0,
            p_memsz: 0x25E000,
            p_align: 0x10000,
          }, {
            p_type: 1,
            p_flags: 7,
            p_offset: 0,
            p_vaddr: 0xFFFFFFFF80000000,
            p_paddr: 0,
            p_filesz: 0x25D6D0,
            p_memsz: 0x25E000,
            p_align: 0x10000,
          }, {
            p_type: 1,
            p_flags: 7,
            p_offset: 0,
            p_vaddr: 0xFFFFFFFF80000000,
            p_paddr: 0,
            p_filesz: 0x25D6D0,
            p_memsz: 0x25E000,
            p_align: 0x10000,
          }, {
            p_type: 1,
            p_flags: 7,
            p_offset: 0,
            p_vaddr: 0xFFFFFFFF80000000,
            p_paddr: 0,
            p_filesz: 0x25D6D0,
            p_memsz: 0x25E000,
            p_align: 0x10000,
          }], // headers
          sections: [{
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }, {
            sh_name: 0,
            sh_type: 0,
            sh_flags: 0,
            sh_addr: 0,
            sh_offset: 0,
            sh_size: 0,
            sh_link: 0,
            sh_info: 0,
            sh_addralign: 0,
            sh_entsize: 0,
          }], // sections
        });
      })
      .catch((e) => {
        expect().to.fail(e);
      });
  /* eslint-enable camelcase */
  });
});