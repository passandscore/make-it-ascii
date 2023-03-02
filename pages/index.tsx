import React, { useState, useRef, useEffect } from 'react';
import { Container, Flex, useMantineColorScheme } from '@mantine/core';
import { Fade } from 'react-awesome-reveal';
import { fontCharacterInputsDefaultValue } from '../constants';
import {
  FontSizeBadge,
  AsciiImage,
  FontColorSwatch,
  DownloadBadge,
  DownloadButtons,
  FontSizeSlider,
  WeightSizeBadge,
  CharacterInputs,
  BackgroundToggleSwitch,
  MakeItAsciiTitle,
  FontColorBadge,
  FontCharactersBadge,
  ColorSchemeBadge,
  downloadContentToImage,
  downloadContentAsText,
  ImageDropzone,
  ResetBadge,
  RevealBadge,
  QuestionMarkTooltip,
} from '../components';

function MakeItASCII() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const [imageUrl, setImageUrl] = useState('');
  const [showColors, setShowColors] = useState(false);
  const [showCharacterInput, setShowCharacterInput] = useState(false);
  const [showFontSize, setShowFontSize] = useState(false);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [selectedColor, setSelectedColor] = useState(isDark ? '#fff' : '#000');
  const [selectedChars, setSelectedChars] = useState(fontCharacterInputsDefaultValue);
  const [selectedFontSize, setSelectedFontSize] = useState(14);
  const [selectedFontWeight, setSelectedFontWeight] = useState('bold');
  const [backgroundState, setBackgroundState] = useState('transparent');

  const selectedFontDefaultValue =
    Number(((Number(selectedFontSize - 8) * 100) / 8).toFixed(2)) || 14;

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

  const resetBadges = () => {
    setShowCharacterInput(false);
    setShowColors(false);
    setShowFontSize(false);
    setShowDownloadOptions(false);
  };

  return (
    <>
      {/* Features */}
      {imageUrl && (
        <Flex justify="center" align="center" my={20} h={100}>
          {showFontSize && (
            <FontSizeSlider
              selectedFontDefaultValue={selectedFontDefaultValue}
              setSelectedFontSize={setSelectedFontSize}
            />
          )}

          {showColors && (
            <FontColorSwatch setSelectedColor={setSelectedColor} setShowColors={setShowColors} />
          )}

          {showCharacterInput && (
            <Flex justify="center" align="center">
              <CharacterInputs setSelectedChars={setSelectedChars} selectedChars={selectedChars} />
              <BackgroundToggleSwitch
                selectedChars={selectedChars}
                backgroundState={backgroundState}
                setBackgroundState={setBackgroundState}
                setSelectedChars={setSelectedChars}
              />
              <QuestionMarkTooltip />
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

      {/* Heading */}
      {!imageUrl && <MakeItAsciiTitle />}

      {/* Feature Badges */}
      <Flex justify="center">
        {!imageUrl ? (
          <Flex>
            <RevealBadge setShowColors={setShowColors} showColors={showColors} />
            <ColorSchemeBadge />
          </Flex>
        ) : (
          <>
            <FontColorBadge
              resetBadges={resetBadges}
              setShowColors={setShowColors}
              showColors={showColors}
              selectedColor={selectedColor}
            />

            <FontCharactersBadge
              resetBadges={resetBadges}
              setShowCharacterInput={setShowCharacterInput}
              selectedChars={selectedChars}
            />

            <FontSizeBadge
              resetBadges={resetBadges}
              setShowFontSize={setShowFontSize}
              selectedFontSize={selectedFontSize}
            />

            <WeightSizeBadge
              resetBadges={resetBadges}
              setSelectedFontWeight={setSelectedFontWeight}
              selectedFontWeight={selectedFontWeight}
            />

            <DownloadBadge
              setShowColors={setShowColors}
              setShowFontSize={setShowFontSize}
              setShowCharacterInput={setShowCharacterInput}
              setShowDownloadOptions={setShowDownloadOptions}
            />
            {imageUrl && <ResetBadge handleReset={handleReset} />}
          </>
        )}
      </Flex>

      {/* Image Dropzone */}
      <Container size="xs" mt="xl">
        <ImageDropzone imageUrl={imageUrl} setImageUrl={setImageUrl} />
      </Container>

      {/* ASCII Art Generator */}
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

export default MakeItASCII;
