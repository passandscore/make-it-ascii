import React, { useState } from 'react';
import { Title, Text, Container } from '@mantine/core';
import { ImageDropzone } from '../ImageDropzone';
import useStyles from './Welcome.styles';
import AsciiImage from '../AsciiImage';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

export function Welcome() {
  const [imageUrl, setImageUrl] = useState('');

  const { classes } = useStyles();

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
      <Title className={classes.title} align="center" mt={100}>
        Make it{' '}
        <Text inherit variant="gradient" component="span">
          ASCII
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Just provide an image and watch as it is converted to ASCII art.
      </Text>

      <Container size="xs" mt="xl">
        <ImageDropzone onDrop={handleDrop} />
      </Container>

      {imageUrl && (
        <Container size="sm" mt="xl">
          <AsciiImage src={imageUrl} />
        </Container>
      )}
    </>
  );
}
