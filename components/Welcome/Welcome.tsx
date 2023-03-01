import React, { useState, useRef, useEffect } from 'react';
import {
  Title,
  Text,
  Container,
  Badge,
  Flex,
  Slider,
  Switch,
  useMantineColorScheme,
} from '@mantine/core';
import { Fade } from 'react-awesome-reveal';
import { ImageDropzone } from '../ImageDropzone';
import useStyles from './Welcome.styles';
import AsciiImage from '../Ascii-Image/AsciiImage';
import { Swatch } from '../ColorSwatch/Swatch';
import { Characters } from '../Inputs/Characters';
import DownloadBadge from '../Download/DownloadBadge';
import DownloadButtons from '../Download/DownloadOptions';
import { downloadContentToImage, downloadContentAsText } from '../Download/downloadLogic';
import FontSizeBadge from '../FontSize/FontSizeBadge';
import FontSizeSlider from '../FontSize/FontSizeSlider';
import WeightSizeBadge from '../FontWeight/WeightSizeBadge';

//Todo: Conditional rending for colorTheme
//Todo: Add black to picker.
export function Welcome() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const [imageUrl, setImageUrl] = useState('');
  const [showColors, setShowColors] = useState(false);
  const [showCharacterInput, setShowCharacterInput] = useState(false);
  const [showFontSize, setShowFontSize] = useState(false);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [selectedColor, setSelectedColor] = useState(isDark ? '#fff' : '#000');
  const [selectedChars, setSelectedChars] = useState(' .:-= +*#%@|');
  const [selectedFontSize, setSelectedFontSize] = useState(14);
  const [selectedFontWeight, setSelectedFontWeight] = useState('bold');
  const [backgroundState, setBackgroundState] = useState('transparent');

  const selectedFontDefaultValue =
    Number(((Number(selectedFontSize - 8) * 100) / 8).toFixed(2)) || 14;

  const { classes } = useStyles();
  const asciiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isDark ? setSelectedColor('#fff') : setSelectedColor('#000');
  }, [isDark]);

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

  const resetBadges = () => {
    setShowCharacterInput(false);
    setShowColors(false);
    setShowFontSize(false);
    setShowDownloadOptions(false);
  };

  return (
    <>
      {imageUrl && (
        <Flex justify="center" align="center" my={20} h={100}>
          {/* font size */}
          {showFontSize && (
            <FontSizeSlider
              selectedFontDefaultValue={selectedFontDefaultValue}
              setSelectedFontSize={setSelectedFontSize}
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
            <DownloadButtons
              downloadContentToImage={downloadContentToImage}
              downloadContentAsText={downloadContentAsText}
              asciiRef={asciiRef}
            />
          )}
        </Flex>
      )}

      {!imageUrl && (
        <>
          <Title className={classes.title} align="center" mt={100}>
            Make it{' '}
            <Text inherit variant="gradient" component="span">
              ASCII
            </Text>
          </Title>
        </>
      )}

      <Flex justify="center">
        {/* reveal */}
        {!imageUrl ? (
          <Flex>
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

            <Badge
              variant="outline"
              size="lg"
              mt={10}
              mx={10}
              onClick={() => toggleColorScheme()}
              style={{
                cursor: 'pointer',
              }}
            >
              {colorScheme === 'light' ? 'dark' : 'light'}
            </Badge>
          </Flex>
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
                setShowColors(true);
              }}
              style={{
                color: selectedColor,
                borderColor: selectedColor,
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
                setShowCharacterInput(true);
              }}
              style={{
                cursor: 'pointer',
              }}
            >
              {selectedChars || 'Characters'}
            </Badge>

            {/* Font Size */}
            <FontSizeBadge
              resetBadges={resetBadges}
              setShowFontSize={setShowFontSize}
              selectedFontSize={selectedFontSize}
            />

            {/* weight */}
            <WeightSizeBadge
              resetBadges={resetBadges}
              setSelectedFontWeight={setSelectedFontWeight}
              selectedFontWeight={selectedFontWeight}
            />

            {/* download */}
            <DownloadBadge
              setShowColors={setShowColors}
              setShowFontSize={setShowFontSize}
              setShowCharacterInput={setShowCharacterInput}
              setShowDownloadOptions={setShowDownloadOptions}
            />
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
