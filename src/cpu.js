/**
 * Virtual CPU for the Gameboy Color; a modified z80
 */
class CPU {
  constructor() {
    // Create the memory banks
    this.memory8bit = new Uint8Array(18);
    this.memory16bit = new Uint16Array(4);
  }

  get a() {
    return this.memory8bit[0];
  }
  set a(value) {
    this.memory8bit[0] = value;
  }
}
export default CPU;
