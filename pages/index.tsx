import React, { useState, useEffect } from 'react';
import { Container, Flex, useMantineColorScheme, Text, Image } from '@mantine/core';
import { fontCharacterInputsDefaultValue } from '../constants';

import {
  FontSizeBadge,
  FontColorSwatch,
  DownloadBadge,
  DownloadButtons,
  FontSizeSlider,
  WeightSizeBadge,
  CharacterInputs,
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
  const [selectedChars, setSelectedChars] = useState(fontCharacterInputsDefaultValue);
  const [selectedFontSize, setSelectedFontSize] = useState(14);
  const [selectedFontWeight, setSelectedFontWeight] = useState('bold');
  const [selectedFeature, setSelectedFeature] = useState('');
  const [openRevealModal, setOpenRevealModal] = useState<boolean>(false);
  const [hideOnDrag, setHideOnDrag] = useState<boolean>(false);
  const [selectedRef, setSelectedRef] = useState<React.MutableRefObject<HTMLDivElement | null>>();

  const selectedFontDefaultValue =
    Number(((Number(selectedFontSize - 8) * 100) / 8).toFixed(2)) || 14;

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
    setSelectedFeature('');
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
    setSelectedFeature('');
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
              <FontColorSwatch
                setSelectedColor={setSelectedColor}
                setShowColors={setShowColors}
                setSelectedFeature={setSelectedFeature}
              />
            )}

            {showBackgroundColors && (
              <BackgroundColorSwatch
                setSelectedBackgroundColor={setSelectedBackgroundColor}
                setShowBackgroundColors={setShowBackgroundColors}
                setSelectedFeature={setSelectedFeature}
              />
            )}

            {showCharacterInput && (
              <Flex justify="center" align="center">
                <CharacterInputs
                  setSelectedChars={setSelectedChars}
                  selectedChars={selectedChars}
                />

                <QuestionMarkTooltip />
              </Flex>
            )}
            {showDownloadOptions && (
              <DownloadButtons
                downloadContentToImage={downloadContentToImage}
                downloadContentAsText={downloadContentAsText}
                asciiRef={selectedRef}
              />
            )}
          </Flex>
        </>
      )}

      {/* Heading */}
      {!imageUrl && !openRevealModal && <MakeItAsciiTitle />}

      {/* Feature Badges */}
      {!openRevealModal && (
        <Flex justify="center">
          {!imageUrl ? (
            <Flex
              style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'inline-block',
              }}
            >
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
                setSelectedFeature={setSelectedFeature}
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
      )}

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
        <ImageDropzone
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          setHideOnDrag={setHideOnDrag}
        />
      </Container>

      {/* Image */}
      {hideOnDrag ||
        (!imageUrl && (
          <Flex
            style={{
              position: 'absolute',
              top: '65%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'inline-block',
            }}
          >
            {isDark ? (
              <Image src="/images/flashbot-green.png" width={300} height={450} />
            ) : (
              <Image src="/images/flashbot-blue.png" width={300} height={450} />
            )}
          </Flex>
        ))}

      <RevealModal openRevealModal={openRevealModal} setOpenRevealModal={setOpenRevealModal} />

      {/* ASCII Art Generator */}
      {imageUrl && (
        <RevealEffectContainer
          src={imageUrl}
          selectedColor={selectedColor}
          selectedChars={selectedChars}
          selectedFontSize={String(selectedFontSize)}
          selectedFontWeight={selectedFontWeight}
          selectedBackgroundColor={selectedBackgroundColor}
          setSelectedRef={setSelectedRef}
        />
      )}
    </>
  );
}

export default MakeItASCII;
