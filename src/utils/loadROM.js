import { Base64 } from 'js-base64';
const MEDIATYPE = 'data:application/octet-stream;base64,';

/**
 * Loads a ROM JSON into a Uint8Array
 * @param  {Object} rom - JSON ROM Object
 * @return {Uint8Array} byte array of ROM contents
 */
function loadROM(rom) {
  checkIsValid(rom);
  const data = Base64.atob(rom.data.substr(MEDIATYPE.length)).split('');
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
