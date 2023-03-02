import React, { useState, useRef, useEffect } from 'react';
import { Container, Flex, useMantineColorScheme, Text } from '@mantine/core';

import {
  FontSizeBadge,
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
  QuestionMarkTooltip,
  BackgroundColorBadge,
  BackgroundColorSwatch,
  RevealBadge,
  RevealModal,
  RevealEffectContainer,
} from '../components';

function MakeItASCII() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const [imageUrl, setImageUrl] = useState('');
  const [showColors, setShowColors] = useState(false);
  const [showBackgroundColors, setShowBackgroundColors] = useState(false);
  const [showCharacterInput, setShowCharacterInput] = useState(false);
  const [showFontSize, setShowFontSize] = useState(false);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [selectedColor, setSelectedColor] = useState(isDark ? '#fff' : '#000');
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState('');
  const [selectedChars, setSelectedChars] = useState('');
  const [selectedFontSize, setSelectedFontSize] = useState(14);
  const [selectedFontWeight, setSelectedFontWeight] = useState('bold');
  const [backgroundState, setBackgroundState] = useState('transparent');
  const [selectedFeature, setSelectedFeature] = useState('');
  const [openRevealModal, setOpenRevealModal] = useState<boolean>(false);

  const selectedFontDefaultValue =
    Number(((Number(selectedFontSize - 8) * 100) / 8).toFixed(2)) || 14;

  const asciiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDark && !selectedColor) {
      setSelectedBackgroundColor('#000');
      return;
    }

    if (!isDark && !selectedColor) {
      setSelectedBackgroundColor('#fff');
    }
  }, [isDark]);

  const handleReset = () => {
    setImageUrl('');
    setSelectedColor('');
    setSelectedChars('');
    setSelectedBackgroundColor('');
    setSelectedFontSize(14);
    setShowCharacterInput(false);
    setShowColors(false);
    setShowFontSize(false);
    setShowDownloadOptions(false);
    setShowBackgroundColors(false);
  };

  const resetBadges = () => {
    setShowCharacterInput(false);
    setShowColors(false);
    setShowFontSize(false);
    setShowDownloadOptions(false);
    setShowBackgroundColors(false);
  };

  return (
    <>
      {/* Features */}
      {imageUrl && (
        <>
          <Flex justify="center" align="center" my={20} h={100}>
            <Text
              fz="xs"
              style={{
                marginRight: 10,
              }}
            >
              {selectedFeature && selectedFeature}
            </Text>

            {showFontSize && (
              <FontSizeSlider
                selectedFontDefaultValue={selectedFontDefaultValue}
                setSelectedFontSize={setSelectedFontSize}
              />
            )}

            {showColors && (
              <FontColorSwatch setSelectedColor={setSelectedColor} setShowColors={setShowColors} />
            )}

            {showBackgroundColors && (
              <BackgroundColorSwatch
                setSelectedBackgroundColor={setSelectedBackgroundColor}
                setShowBackgroundColors={setShowBackgroundColors}
              />
            )}

            {showCharacterInput && (
              <Flex justify="center" align="center">
                <CharacterInputs
                  setSelectedChars={setSelectedChars}
                  selectedChars={selectedChars}
                />
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
        </>
      )}

      {/* Heading */}
      {!imageUrl && <MakeItAsciiTitle />}

      {/* Feature Badges */}
      <Flex justify="center">
        {!imageUrl ? (
          <Flex>
            <RevealBadge
              setOpenRevealModal={setOpenRevealModal}
              openRevealModal={openRevealModal}
            />
            <ColorSchemeBadge />
          </Flex>
        ) : (
          <Flex>
            <FontCharactersBadge
              resetBadges={resetBadges}
              setShowCharacterInput={setShowCharacterInput}
              selectedChars={selectedChars}
              showCharacterInput={showCharacterInput}
              setSelectedFeature={setSelectedFeature}
              selectedFeature={selectedFeature}
            />

            <FontSizeBadge
              resetBadges={resetBadges}
              setShowFontSize={setShowFontSize}
              selectedFontSize={selectedFontSize}
              showFontSize={showFontSize}
              setSelectedFeature={setSelectedFeature}
              selectedFeature={selectedFeature}
            />

            <WeightSizeBadge
              resetBadges={resetBadges}
              setSelectedFontWeight={setSelectedFontWeight}
              selectedFontWeight={selectedFontWeight}
            />

            <DownloadBadge
              setShowDownloadOptions={setShowDownloadOptions}
              showDownloadOptions={showDownloadOptions}
              resetBadges={resetBadges}
              selectedFeature={selectedFeature}
              setSelectedFeature={setSelectedFeature}
            />

            <ResetBadge handleReset={handleReset} />
          </Flex>
        )}
      </Flex>

      {imageUrl && (
        <Flex justify="center">
          <ColorSchemeBadge />

          <FontColorBadge
            resetBadges={resetBadges}
            setShowColors={setShowColors}
            showColors={showColors}
            setSelectedFeature={setSelectedFeature}
            selectedFeature={selectedFeature}
          />

          <BackgroundColorBadge
            resetBadges={resetBadges}
            setShowBackgroundColors={setShowBackgroundColors}
            showBackgroundColors={showBackgroundColors}
            setSelectedFeature={setSelectedFeature}
            selectedFeature={selectedFeature}
          />
        </Flex>
      )}

      {/* Image Dropzone */}
      <Container size="xs" mt="xl">
        <ImageDropzone imageUrl={imageUrl} setImageUrl={setImageUrl} />
      </Container>

      <RevealModal openRevealModal={openRevealModal} setOpenRevealModal={setOpenRevealModal} />

      {/* ASCII Art Generator */}
      {imageUrl && (
        <RevealEffectContainer
          src={imageUrl}
          selectedColor={selectedColor}
          selectedChars={selectedChars}
          selectedFontSize={String(selectedFontSize)}
          selectedFontWeight={selectedFontWeight}
          asciiRef={asciiRef}
          selectedBackgroundColor={selectedBackgroundColor}
        />
      )}
    </>
  );
}

export default MakeItASCII;
