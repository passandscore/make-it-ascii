import html2canvas from 'html2canvas';

export const downloadContentToImage = (asciiRef: React.MutableRefObject<HTMLDivElement | null>) => {
  // Capture the content to be downloaded
  const asciiContent = asciiRef && asciiRef?.current;

  // Determine the height of the content
  const height = asciiContent?.offsetHeight;

  // Use html2canvas to render the content as an image
  html2canvas(asciiContent!, { height }).then((canvas) => {
    // Convert the final canvas to a data URL
    const dataURL = canvas.toDataURL();

    // Create a download link for the image
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = dataURL;

    // Click the download link to initiate the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
