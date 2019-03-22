import path from 'path';
import expect from 'expect.js';
import loadELF from './loadELF.js';
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

  it('loads roms/vmlinux', () => {
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
          e_shstrndx: 0xF});
        })
      .catch((e) => {
        expect().to.fail(e);
      });
  });
});
