import path from 'path';
import expect from 'expect.js';
import loadELF from './loadELF.js';
const FILE_PATH = path.join(process.cwd(), '/roms/vmlinux');

describe.only('loadELF', () => {
  it('loads endian type from roms/vmlinux', () => {
    return loadELF(FILE_PATH)
      .then((actual) => {
        expect(actual.isBigEdian).to.eql(false);
        expect(actual.isLittleEdian).to.eql(true);
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
