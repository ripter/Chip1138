function getImageData (uri) {
  const elCanvas = document.createElement('canvas');
  const ctx = elCanvas.getContext('2d');
  const img = new Image();

  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0,0, img.width, img.height);
    // console.log('Image data', imageData);
  };

  img.src = uri;
}

module.exports = getImageData;
