import React, { useEffect, useState } from 'react';
import { Title, Text, Container } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { ImageDropzone } from '../ImageDropzone';
import useStyles from './Welcome.styles';
import AsciiImage from '../Ascii-Image/AsciiImage';

export function Welcome() {
  const [imageUrl, setImageUrl] = useState('');
  const [columns, setColumns] = useState(72);

  const { classes } = useStyles();
  const { width } = useViewportSize();

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
      <Title className={classes.title} align="center" mt={100}>
        Make it{' '}
        <Text inherit variant="gradient" component="span">
          ASCII
        </Text>
      </Title>

      {!imageUrl && (
        <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
          Just provide an image and watch as it is converted to ASCII art.
        </Text>
      )}

      <Container size="xs" mt="xl">
        <ImageDropzone
          handleDrop={handleDrop}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          width={width}
        />
      </Container>

      {imageUrl && (
        <Container>
          <AsciiImage src={imageUrl} columns={columns} />
        </Container>
      )}
    </>
  );
}
