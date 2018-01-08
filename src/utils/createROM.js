import { Base64 } from 'js-base64';
const MEDIATYPE = 'data:application/octet-stream;base64,';

/**
 * Creates a ROM JSON from a Uint16Array
 * @param  {Uint16Array} binary - TypedArray of the game data.
 * @return {Object} A ROM JSON
 */
function createROM(binary) {
  // convert each byte into a char code so we can turn it into a base64 string.
  const stringData = binary.reduce((acc, byte) => { return acc + String.fromCharCode(byte); }, '');
  // convert the string into a base64 string.
  const base64String = Base64.encode(stringData);
  return {
    data: MEDIATYPE + base64String,
  };
}
export default createROM;
