const expect = require('expect.js');

describe('parse image:', () => {
  let actual, dataURL;

  describe('return 1x1 Red Square', () => {
    beforeEach(() => {
      dataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2P4z8DwHwAFAAH/plybXQAAAABJRU5ErkJggg==';
    });

    it('ImageData', () => {
      expect(actual).to.eql({
        data: [255, 0, 0, 255],
        width: 1,
        height: 1,
      });
    });

  });
});
