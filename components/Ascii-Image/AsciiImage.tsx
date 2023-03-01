import React, { useEffect, useState } from 'react';

const AsciiImage = (props: {
  src: string;
  selectedColor?: string;
  selectedChars?: string;
  selectedFontSize?: string;
  selectedFontWeight?: string;
}) => {
  const [asciiChars, setAsciiChars] = useState([] as string[]);
  const map = props.selectedChars || ' .:-=+*#%@|';

  const resolutionY = 0.6;
  const columns = 70;

  const convertToAscii = (url: string) => {
    const image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const ratio = image.width / image.height;
      canvas.width = columns;
      canvas.height = (columns / ratio) * resolutionY;
      ctx?.drawImage(image, 0, 0, canvas.width, canvas.height);
      const { data } = ctx && (ctx.getImageData(0, 0, canvas.width, canvas.height) as any);
      for (let i = 0; i < data.length; i += 4) {
        const brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
        data[i] = brightness;
      }
      const newAsciiChars = [];
      for (let i = 0; i < data.length; i += 4) {
        const rchar = map[Math.round(((map.length - 1) * data[i]) / 255)];
        newAsciiChars.push(rchar);
        if (Math.ceil((i + 1) / 4) % columns === 0) newAsciiChars.push('\n');
      }
      setAsciiChars(newAsciiChars);
    };
    image.src = url;
  };

  useEffect(() => {
    if (props.src) {
      convertToAscii(props.src);
    }
  }, [props.selectedColor, props.selectedChars, props.selectedFontSize, props.selectedFontWeight]);

  const ascii = () => asciiChars.join('');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <style>
        {`
        pre {
          font-weight: ${props.selectedFontWeight};
          line-height: 0.95em;
          color: ${props.selectedColor || 'white'};
          font-size: ${props.selectedFontSize}px;
        }
        `}
      </style>
      <pre>{ascii()}</pre>
    </div>
  );
};

export default AsciiImage;
