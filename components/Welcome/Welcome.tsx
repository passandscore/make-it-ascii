import React, { useEffect, useState } from 'react';
import { Title, Text, Container, Badge, Flex } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { ImageDropzone } from '../ImageDropzone';
import useStyles from './Welcome.styles';
import AsciiImage from '../Ascii-Image/AsciiImage';
import { Swatch } from '../ColorSwatch/Swatch';

export function Welcome() {
  const [imageUrl, setImageUrl] = useState('');
  const [columns, setColumns] = useState(72);
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const { classes } = useStyles();
  const { width } = useViewportSize();

  const handleReset = () => {
    setImageUrl('');
    setSelectedColor('');
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

  useEffect(() => {
    if (width < 600) {
      setColumns(36);
      return;
    }
    if (width < 900) {
      setColumns(48);
      return;
    }
    if (width < 1200) {
      setColumns(60);
      return;
    }
    if (width < 1500) {
      setColumns(72);
    }
  }, [width]);

  return (
    <>
      {showColors && (
        <Flex
          justify="center"
          mt={2}
          style={{
            position: 'absolute',
            top: '25px',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            zIndex: 100,
          }}
        >
          <Swatch setSelectedColor={setSelectedColor} setShowColors={setShowColors} />
        </Flex>
      )}

      <Title className={classes.title} align="center" mt={100}>
        Make it{' '}
        <Text inherit variant="gradient" component="span">
          ASCII
        </Text>
      </Title>

      <Flex justify="center">
        <Badge
          variant="outline"
          size="lg"
          mt={10}
          onClick={() => setShowColors(!showColors)}
          style={{
            cursor: 'pointer',
          }}
        >
          {' '}
          Characters
        </Badge>

        <Badge
          variant="outline"
          size="lg"
          mt={10}
          mx={20}
          onClick={() => setShowColors(!showColors)}
          style={{
            color: selectedColor || 'white',
            borderColor: selectedColor || 'white',
            cursor: 'pointer',
          }}
        >
          {' '}
          Color
        </Badge>

        <Badge
          variant="outline"
          size="lg"
          mt={10}
          onClick={() => setShowColors(!showColors)}
          style={{
            cursor: 'pointer',
          }}
        >
          {' '}
          Dimensions
        </Badge>
      </Flex>

      <Container size="xs" mt="xl">
        <ImageDropzone
          handleDrop={handleDrop}
          imageUrl={imageUrl}
          width={width}
          handleReset={handleReset}
        />
      </Container>

      {imageUrl && (
        <Container>
          <AsciiImage src={imageUrl} columns={columns} selectedColor={selectedColor} />
        </Container>
      )}
    </>
  );
}
