import { Base64 } from 'js-base64';
const MEDIATYPE = 'data:application/octet-stream;base64,';

/**
 * Loads a ROM JSON into a Uint16Array
 * @param  {Object} rom - JSON ROM Object
 * @return {Uint16Array} byte array of ROM contents
 */
function loadROM(rom) {
  checkIsValid(rom);
  // Get juse the data string from the rom, skipping the MEDIATYPE
  const base64String = rom.data.substr(MEDIATYPE.length);
  // comvert the base64 string into an array of bytes
  const data = Base64.atob(base64String).split('');
  // convert the array of characters into an array of 16-bit values.
  const binary = new Uint16Array(data.map((char) => char.charCodeAt(0)));
  return binary;
}
export default loadROM;

function checkIsValid(rom) {
  const { data } = rom;
  if (!data || !data.startsWith(MEDIATYPE)) {
    throw new Error('Error invalid datauri');
  }
}
