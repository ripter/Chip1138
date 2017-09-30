import 'document-register-element';

const WIDTH = 1;
const HEIGHT = 1;
const { canvas } = window;
canvas.width = WIDTH;
canvas.height = HEIGHT;
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = '#FF0000';
// ctx.fillRect(0, 0, WIDTH, HEIGHT);
// const imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
// const dataURL = canvas.toDataURL();
// //
// console.log('imgData', imgData);
// console.log('dataURL', dataURL);
// window.dataURL = dataURL;
// window.imgData = imgData;


// 10x10 red square
// const dataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQoU2P8z8Dwn4EIwDiqEF8oUT94AGX8E/fVVQbMAAAAAElFTkSuQmCC'
// 1x1 red square
// const dataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2P4z8DwHwAFAAH/plybXQAAAABJRU5ErkJggg==';
// const img = new Image(10, 10);
// img.onload = function() {
//   ctx.drawImage(img, 0, 0);
//   window.app.append(img);
// }
// img.src = dataURL;
