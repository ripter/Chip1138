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
