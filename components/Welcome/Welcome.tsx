import React, { useState, useRef } from 'react';
import { Title, Text, Container, Badge, Flex, Slider, Button, Switch } from '@mantine/core';
import { IconPhoto, Icon123 } from '@tabler/icons';
import { showNotification } from '@mantine/notifications';
import html2canvas from 'html2canvas';
import { Fade } from 'react-awesome-reveal';
import { ImageDropzone } from '../ImageDropzone';
import useStyles from './Welcome.styles';
import AsciiImage from '../Ascii-Image/AsciiImage';
import { Swatch } from '../ColorSwatch/Swatch';
import { Characters } from '../Inputs/Characters';

export function Welcome() {
  const [imageUrl, setImageUrl] = useState('');
  const [showColors, setShowColors] = useState(false);
  const [showCharacterInput, setShowCharacterInput] = useState(false);
  const [showFontSize, setShowFontSize] = useState(false);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedChars, setSelectedChars] = useState(' .:-= +*#%@|');
  const [selectedFontSize, setSelectedFontSize] = useState(14);
  const [selectedFontWeight, setSelectedFontWeight] = useState('bold');
  const [backgroundState, setBackgroundState] = useState('transparent');

  const selectedFontDefaultValue =
    Number(((Number(selectedFontSize - 8) * 100) / 8).toFixed(2)) || 14;

  const { classes } = useStyles();
  const asciiRef = useRef<HTMLDivElement>(null);

  const handleReset = () => {
    setImageUrl('');
    setSelectedColor('');
    setSelectedChars('');
    setSelectedFontSize(14);
    setShowCharacterInput(false);
    setShowColors(false);
    setShowFontSize(false);
    setShowDownloadOptions(false);
  };

  const handleDrop = (files: File[]) => {
    const file = files[0];

    const reader = new FileReader();
    reader.onload = () => {
      const link = URL.createObjectURL(files[0]);
      setImageUrl(link);
    };
    reader.readAsDataURL(file);
  };

  const downloadContentAsText = () => {
    const asciiContent = asciiRef && asciiRef?.current?.innerText;

    const fileName = 'ascii.txt';
    const blob = new Blob([asciiContent!], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);

    showNotification({
      title: 'Make it ASCII 😎',
      message: 'Downloaded as text',
    });
  };

  const downloadContentToImage = () => {
    // Capture the content to be downloaded
    const asciiContent = asciiRef && asciiRef?.current;

    // Determine the height of the content
    const height = asciiContent?.offsetHeight;

    // Use html2canvas to render the content as an image
    html2canvas(asciiContent!, { height }).then((canvas) => {
      // Create a new canvas with the same dimensions as the content canvas
      const finalCanvas = document.createElement('canvas');
      finalCanvas.width = canvas.width;
      finalCanvas.height = canvas.height;

      // Draw the image on the final canvas at the center
      const ctx = finalCanvas.getContext('2d');
      ctx?.drawImage(
        canvas,
        (finalCanvas.width - canvas.width) / 2,
        (finalCanvas.height - canvas.height) / 2
      );

      // Convert the final canvas to a data URL
      const dataURL = finalCanvas.toDataURL();

      // Create a download link for the image
      const link = document.createElement('a');
      link.download = 'download.png';
      link.href = dataURL;

      // Click the download link to initiate the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    showNotification({
      title: 'Make it ASCII 😎',
      message: 'Downloaded as an image',
    });
  };

  return (
    <>
      {imageUrl && (
        <Flex justify="center" align="center" my={20} h={100}>
          {showFontSize && (
            <Slider
              size="lg"
              radius="lg"
              defaultValue={selectedFontDefaultValue}
              marks={[
                { value: 0, label: '8px' },
                { value: 25, label: '10px' },
                { value: 50, label: '12px' },
                { value: 75, label: '14px' },
                { value: 100, label: '16px' },
              ]}
              style={{
                width: '50%',
              }}
              onChange={(value) => {
                const fontSize = ((value / 100) * 8 + 8).toFixed(2);
                setSelectedFontSize(Number(fontSize));
              }}
            />
          )}

          {showColors && (
            <Swatch setSelectedColor={setSelectedColor} setShowColors={setShowColors} />
          )}

          {showCharacterInput && (
            <Flex justify="center" align="center">
              <Characters setSelectedChars={setSelectedChars} selectedChars={selectedChars} />
              <Switch
                ml={20}
                label="Add Background"
                onChange={() => {
                  const currentChars = selectedChars.split('');
                  if (backgroundState === 'transparent') {
                    setBackgroundState('visible');
                    currentChars.shift();
                  } else {
                    setBackgroundState('transparent');
                    currentChars.unshift(' ');
                  }
                  const newChars = currentChars.join('');
                  setSelectedChars(newChars);
                }}
              />
            </Flex>
          )}

          {showDownloadOptions && (
            <>
              <Button
                variant="light"
                rightIcon={<IconPhoto size={20} stroke={1.5} />}
                radius="xl"
                size="md"
                mx={20}
                styles={{
                  root: { paddingRight: 14, height: 48 },
                  rightIcon: { marginLeft: 22 },
                }}
                onClick={downloadContentToImage}
              >
                Save as image
              </Button>

              <Button
                variant="light"
                rightIcon={<Icon123 size={20} stroke={1.5} />}
                radius="xl"
                size="md"
                styles={{
                  root: { paddingRight: 14, height: 48 },
                  rightIcon: { marginLeft: 22 },
                }}
                onClick={downloadContentAsText}
              >
                Save as text
              </Button>
            </>
          )}
        </Flex>
      )}

      {!imageUrl && (
        <Title className={classes.title} align="center" mt={100}>
          Make it{' '}
          <Text inherit variant="gradient" component="span">
            ASCII
          </Text>
        </Title>
      )}

      <Flex justify="center">
        {/* reveal */}
        {!imageUrl ? (
          <Badge
            variant="outline"
            size="lg"
            mt={10}
            mx={10}
            onClick={() => setShowColors(!showColors)}
            style={{
              cursor: 'pointer',
            }}
          >
            reveal
          </Badge>
        ) : (
          <>
            {/* color */}
            <Badge
              variant="outline"
              size="lg"
              mt={10}
              mx={10}
              onClick={() => {
                setShowCharacterInput(false);
                setShowFontSize(false);
                setShowDownloadOptions(false);
                setShowColors(!showColors);
              }}
              style={{
                color: selectedColor || '#329AEF',
                borderColor: selectedColor || '#329AEF',
                cursor: 'pointer',
              }}
            >
              Color
            </Badge>

            {/* Characters */}
            <Badge
              variant="outline"
              size="lg"
              mt={10}
              mx={10}
              onClick={() => {
                setShowColors(false);
                setShowFontSize(false);
                setShowDownloadOptions(false);
                setShowCharacterInput(!showCharacterInput);
              }}
              style={{
                cursor: 'pointer',
              }}
            >
              {selectedChars || 'Characters'}
            </Badge>

            {/* Font Size */}
            <Badge
              variant="outline"
              size="lg"
              mt={10}
              mx={10}
              onClick={() => {
                setShowColors(false);
                setShowCharacterInput(false);
                setShowDownloadOptions(false);
                setShowFontSize(true);
              }}
              style={{
                cursor: 'pointer',
              }}
            >
              {`${selectedFontSize}px` || 'Size'}
            </Badge>

            {/* weight */}
            <Badge
              variant="outline"
              size="lg"
              mt={10}
              mx={10}
              onClick={() => {
                setShowColors(false);
                setShowCharacterInput(false);
                setShowFontSize(false);
                setShowDownloadOptions(false);
                selectedFontWeight === 'normal'
                  ? setSelectedFontWeight('bold')
                  : setSelectedFontWeight('normal');
              }}
              style={{
                cursor: 'pointer',
                fontWeight: selectedFontWeight === 'normal' ? 'normal' : 'bold',
              }}
            >
              weight
            </Badge>

            {/* download */}
            <Badge
              variant="outline"
              size="lg"
              mt={10}
              mx={10}
              // onClick={downloadContent}
              // onClick={downloadContentToImage}
              onClick={() => {
                setShowColors(false);
                setShowFontSize(false);
                setShowDownloadOptions(false);
                setShowCharacterInput(false);
                setShowDownloadOptions(!showDownloadOptions);
              }}
              style={{
                cursor: 'pointer',
              }}
            >
              download
            </Badge>

            {/* reset */}
            {imageUrl && (
              <Badge
                variant="outline"
                size="lg"
                mt={10}
                mx={10}
                onClick={() => {
                  handleReset();
                }}
                style={{
                  color: 'red',
                  borderColor: 'red',
                  cursor: 'pointer',
                }}
              >
                {' '}
                Reset
              </Badge>
            )}
          </>
        )}
      </Flex>

      <Container size="xs" mt="xl">
        <ImageDropzone handleDrop={handleDrop} imageUrl={imageUrl} />
      </Container>

      {imageUrl && (
        <Fade triggerOnce duration={800} delay={800} damping={0.2}>
          <Container>
            <AsciiImage
              src={imageUrl}
              selectedColor={selectedColor}
              selectedChars={selectedChars}
              selectedFontSize={String(selectedFontSize)}
              selectedFontWeight={selectedFontWeight}
              asciiRef={asciiRef}
            />
          </Container>
        </Fade>
      )}
    </>
  );
}
