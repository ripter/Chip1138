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
        expect(actual).to.eql('\x7fELF');
      })
      .catch((e) => {
        expect().to.fail(e);
      });
  });
});
