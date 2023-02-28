import React, { useEffect, useState } from 'react';

const AsciiImage = (props) => {
  console.log('AsciiImage', props);
  const [asciiChars, setAsciiChars] = useState([]);
  const map = '@#%*+=-:. ';
  const resolutionY = 0.6;
  const columns = props.columns || 80;

  const convertToAscii = (url) => {
    console.log('convertToAscii', url);
    let image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');
    image.onload = function () {
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      let ratio = image.width / image.height;
      canvas.width = columns;
      canvas.height = (columns / ratio) * resolutionY;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      let data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      for (let i = 0; i < data.length; i += 4) {
        let brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
        data[i] = brightness;
      }
      let newAsciiChars = [];
      for (let i = 0; i < data.length; i += 4) {
        let rchar = map[Math.round(((map.length - 1) * data[i]) / 255)];
        newAsciiChars.push(rchar);
        if (Math.ceil((i + 1) / 4) % columns == 0) newAsciiChars.push('\n');
      }
      setAsciiChars(newAsciiChars);
    };
    image.src = url;

    console.log('image', image);
  };

  useEffect(() => {
    if (props.src) {
      convertToAscii(props.src);
    }
  }, []);

  const ascii = () => asciiChars.join('');

  return (
    <div>
      <style>
        {`
        pre {
          font-weight: bold;
          line-height: 0.95em;
        }
        `}
      </style>
      <pre>{ascii()}</pre>
    </div>
  );
};

export default AsciiImage;
