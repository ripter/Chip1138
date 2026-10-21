/**
 * Adds some extra attributes to the opcode object
 * This is to make the tests look nicer.
 */
export function addTestData(opcode) {
  opcode.register1 = opcode.operand1.toLowerCase();
  opcode.register2 = opcode.operand2.toLowerCase();
  opcode.byte = parseInt(opcode.addr, 16);
  return opcode;
}

/**
 * The F register layout per Pan Docs (CPU registers & flags):
 * https://gbdev.io/pandocs/CPU_Registers_and_Flags.html
 *
 * Only the TOP nibble of F is defined, and the low nibble always reads 0:
 *   0b 0000 0000
 *      bit 7 Z - zero flag
 *      bit 6 N - subtract (negative) flag
 *      bit 5 H - half-carry flag
 *      bit 4 C - carry flag
 *      bits 3-0 unused, always 0
 *
 * (Spec update, Phase 2: the pre-existing tests asserted on a low-nibble
 * flag layout. These constants are the real hardware encoding.)
 */
export const FLAG_ZERO = 0x80;
export const FLAG_NEGATIVE = 0x40;
export const FLAG_HALF_CARRY = 0x20;
export const FLAG_CARRY = 0x10;

export function random8bit() {
  return 0 | Math.random() * 0x100;
}

export function random16bit() {
  return 0 | Math.random() * 0x10000;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}
