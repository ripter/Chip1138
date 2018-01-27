import CPU from './cpu.js';
import Memory from './memory.js';
import loadROM from './utils/loadROM.js';
// import createROM from './utils/createROM.js';
import rom from '../roms/flappyboy.json';
// import rom from '../roms/zelda-la.json';
//
// window.rom = rom;
let romData = window.romData = loadROM(rom);
// console.log('loaded romData');
//
// romData[0x0147] = 0x1C;
// const updatedRom = window.updatedRom = createROM(romData);

// const cpu = new CPU();
// const opcodes = [
//   0x3e, 0xff, // LD  a, 255
//   0x87, // ADD a, a
// ];
// run the opcodes
// opcodes.forEach(function(opcode) {
//   cpu.processOpcode(opcode);
// });


const memory = window.memory = new Memory(rom);
const cpu = window.cpu = new CPU({
  memory,
});

/*
The Stack Pointer automatically decrements before it puts something onto the stack so it is perfectly acceptable to assign it a value which points to a memory address which is one location past the end of available RAM.
*/
console.log('first byte', `0x${memory.readROM(cpu.sp--).toString(16)}`);


// import zelda from '../roms/zelda-la.json';
// const romData = window.romData = loadROM(rom);
// console.log('romData', romData.length);
// // print the rom title

// const title = [0x134, 0x135, 0x136, 0x137, 0x138, 0x139, 0x13a, 0x13b, 0x13c].reduce((acc, addr) => {
//   return acc + String.fromCharCode(romData[addr]);
// }, '');
// console.log('rom title: ', title);
