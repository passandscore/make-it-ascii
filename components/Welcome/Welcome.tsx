import React, { useState } from 'react';
import { Title, Text, Container, Badge, Flex, Slider } from '@mantine/core';
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
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedChars, setSelectedChars] = useState('');
  const [selectedFontSize, setSelectedFontSize] = useState(14);
  const [selectedFontWeight, setSelectedFontWeight] = useState('bold');

  const selectedFontDefaultValue =
    Number(((Number(selectedFontSize - 8) * 100) / 8).toFixed(2)) || 14;

  const { classes } = useStyles();

  const handleReset = () => {
    setImageUrl('');
    setSelectedColor('');
    setSelectedChars('');
    setSelectedFontSize(14);
    setShowCharacterInput(false);
    setShowColors(false);
    setShowFontSize(false);
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
            <Characters setSelectedChars={setSelectedChars} selectedChars={selectedChars} />
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
                selectedFontWeight === 'normal'
                  ? setSelectedFontWeight('bold')
                  : setSelectedFontWeight('normal');
              }}
              style={{
                cursor: 'pointer',
                fontWeight: selectedFontWeight === 'normal' ? 'normal' : 'bold',
              }}
            >
              {' '}
              weight
            </Badge>

            {/* copy */}
            <Badge
              variant="outline"
              size="lg"
              mt={10}
              mx={10}
              onClick={() => {
                setShowColors(false);
                setShowCharacterInput(!showCharacterInput);
              }}
              style={{
                cursor: 'pointer',
              }}
            >
              copy
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
            />
          </Container>
        </Fade>
      )}
    </>
  );
}
