// import CPU from './cpu.js';
// import Memory from './memory.js';
// import loadROM from './utils/loadROM.js';
// import rom from '../roms/flappyboy.json';
// let romData = window.romData = loadROM(rom);
//
//
// const memory = window.memory = new Memory(rom);
// const cpu = window.cpu = new CPU({
//   memory,
// });
//
// cpu.sp = 0x0100;
// const firstByte = memory.readROM(cpu.sp-1);
// console.log('first byte', `0x${firstByte.toString(16)}`);




// print the rom title
// const title = [0x134, 0x135, 0x136, 0x137, 0x138, 0x139, 0x13a, 0x13b, 0x13c].reduce((acc, addr) => {
//   return acc + String.fromCharCode(romData[addr]);
// }, '');
// console.log('rom title: ', title);


// const cpu = new CPU();
// const opcodes = [
//   0x3e, 0xff, // LD  a, 255
//   0x87, // ADD a, a
// ];
// run the opcodes
// opcodes.forEach(function(opcode) {
//   cpu.processOpcode(opcode);
// });
