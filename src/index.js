// import CPU from './cpu.js';
// import loadROM from './utils/loadROM.js';

// const cpu = new CPU();
// const opcodes = [
//   0x3e, 0xff, // LD  a, 255
//   0x87, // ADD a, a
// ];
// run the opcodes
// opcodes.forEach(function(opcode) {
//   cpu.processOpcode(opcode);
// });



// import zelda from '../roms/zelda-la.json';
// import rom from '../roms/flappyboy.json';
// const romData = window.romData = loadROM(rom);
// console.log('romData', romData.length);
// // print the rom title
// const title = [0x134, 0x135, 0x136, 0x137, 0x138, 0x139, 0x13a, 0x13b, 0x13c].reduce((acc, addr) => {
//   return acc + String.fromCharCode(romData[addr]);
// }, '');
// console.log('rom title: ', title);
