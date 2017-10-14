import expect from 'expect.js';
import CPU from '../src/cpu.js';
import { OPCODE } from '../const/asm.js';


describe('opcodes', () => {
  let cpu;

  beforeEach(() => {
    cpu = new CPU();
  });

  // Test each opcode
  Object.keys(OPCODE).forEach(function(opcode) {
    const { asm } = OPCODE[opcode];
    const testByte = 0xcf;
    it(asm, () => {
      cpu.processOpcode(opcode);
      cpu.processOpcode(testByte);
      expect(cpu.b).to.eql(testByte);
    });
  });
});
