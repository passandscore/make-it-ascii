import * as htmlToImage from 'html-to-image';

export const downloadContentToImage = (asciiRef: React.MutableRefObject<HTMLDivElement | null>) => {
  // Capture the content to be downloaded
  const asciiContent = asciiRef && asciiRef?.current;

  htmlToImage.toJpeg(asciiContent!, { quality: 0.95 }).then((dataUrl) => {
    const link = document.createElement('a');
    link.download = 'my-image-name.jpeg';
    link.href = dataUrl;
    link.click();
  });
};

export const downloadContentAsText = (asciiRef: React.MutableRefObject<HTMLDivElement | null>) => {
  const asciiContent = asciiRef && asciiRef?.current?.innerText;

  const fileName = 'ascii.txt';
  const blob = new Blob([asciiContent!], { type: 'text/plain' });

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(url);
};
