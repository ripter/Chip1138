import { readFile, writeFile } from 'fs';
import { Base64 } from 'js-base64';

export const MEDIATYPE = 'data:application/octet-stream;base64,';

/**
 * Creates a JSON with with the ROM binary from a Uint16Array
 * @param  {Uint16Array} binary - TypedArray of data.
 * @return {Object} A JSON with a dataurl of the data.
 */
export function createJSONROM(binary) {
  // console.log('\n\nbinary\t', binary, '\n\n');
  // convert each byte into a char code so we can turn it into a base64 string.
  // const stringData = binary.reduce((acc, byte) => { return acc + String.fromCharCode(byte); }, '');
  let stringData = '';
  for (let i = 0; i < binary.length; i += 2) {
    const byte = binary[i];
    const byte2 = binary[i + 1];
    stringData += String.fromCharCode(byte, byte2);
  }
  // convert the string into a base64 string.
  const base64String = Base64.encode(stringData);
  return {
    data: MEDIATYPE + base64String,
  };
}
export default createJSONROM;

export function convertROMtoJSON(filePath) {
  return new Promise(((resolve, reject) => {
    try {
      readFile(filePath, 'utf8', (err, dataBuffer) => {
        if (err) { reject(err); }

        resolve(createJSONROM(dataBuffer));
      });
    } catch (err) {
      reject(`Unknown error loading ROM at "${filePath}"\n\t${err}`);
    }
  }));
}

export function writeJSON(filePath, json) {
  return new Promise(((resolve, reject) => {
    try {
      writeFile(filePath, JSON.stringify(json, void 0, 4), 'utf8', (err) => {
        // reference: https://en.wikipedia.org/wiki/Executable_and_Linkable_Format
        if (err) { reject(err); }

        resolve(filePath);
      });
    } catch (err) {
      reject(`Unknown error loading ROM at "${filePath}"\n\t${err}`);
    }
  }));
}
