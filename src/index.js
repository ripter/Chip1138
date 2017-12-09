import CPU from './cpu.js';

const cpu = new CPU();
const opcodes = [
  0x3e, 0xff, // LD  a, 255
  0x87, // ADD a, a
];

// run the opcodes
opcodes.forEach(function(opcode) {
  cpu.processOpcode(opcode);
});
// import zelda from '../roms/zelda-la.json';
//
// const rom = window.rom = zelda;
// console.log('rom', rom);
//
// // convert the base64 rom back into binary
// const romData = atob(rom.data);
//
// // print the rom title
// const title = [0x134, 0x135, 0x136, 0x137, 0x138, 0x139, 0x140, 0x141, 0x142].reduce((acc, addr) => {
//   return acc + romData.charAt(addr).toString(16)
// }, '');
// console.log('rom title: ', title);
