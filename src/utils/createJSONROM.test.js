import path from 'path';
import expect from 'expect.js';
import { convertROMtoJSON, MEDIATYPE } from './createJSONROM.js';
const FILE_PATH = path.join(process.cwd(), '/roms/gbstudio_test.gb');

describe('convertROMtoJSON', () => {
  it('has a property called data', () => {
    return convertROMtoJSON(FILE_PATH)
      .then((actual) => {
        expect(actual.data).to.be.a('string');
      })
      .catch((e) => {
        expect().to.fail(e);
      });
  });
  it('has a dataurl header', () => {
    return convertROMtoJSON(FILE_PATH)
      .then((actual) => {
        expect(actual.data.substring(0, 37)).to.eql(MEDIATYPE);
      })
      .catch((e) => {
        expect().to.fail(e);
      });
  });
});
