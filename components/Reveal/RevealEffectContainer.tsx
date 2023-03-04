/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import React, { useRef, useEffect } from 'react';
import { Container } from '@mantine/core';
import {
  Fade,
  Bounce,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from 'react-awesome-reveal';
import { useLocalStorage } from '@mantine/hooks';

import { AsciiImage } from '../Ascii-Image/AsciiImage';

export const RevealEffectContainer = ({
  src,
  selectedColor,
  selectedChars,
  selectedFontSize,
  selectedFontWeight,
  selectedBackgroundColor,
  setSelectedRef,
}: {
  src: string;
  selectedColor: string;
  selectedChars: string;
  selectedFontSize: string;
  selectedFontWeight: string;
  selectedBackgroundColor: string;
  setSelectedRef: (arg: any) => void;
}) => {
  const fadeRef = useRef(null);
  const flipRef = useRef(null);
  const bounceRef = useRef(null);
  const hingeRef = useRef(null);
  const jackRef = useRef(null);
  const rollRef = useRef(null);
  const rotateRef = useRef(null);
  const slideRef = useRef(null);
  const zoomRef = useRef(null);

  const [value] = useLocalStorage({ key: 'reveal', defaultValue: 'Fade' });

  useEffect(() => {
    switch (value) {
      case 'Fade':
        setSelectedRef(fadeRef);
        break;
      case 'Flip':
        setSelectedRef(flipRef);
        break;
      case 'Bounce':
        setSelectedRef(bounceRef);
        break;
      case 'Hinge':
        setSelectedRef(hingeRef);
        break;
      case 'Jack':
        setSelectedRef(jackRef);
        break;
      case 'Roll':
        setSelectedRef(rollRef);
        break;
      case 'Rotate':
        setSelectedRef(rotateRef);
        break;
      case 'Slide':
        setSelectedRef(slideRef);
        break;
      case 'Zoom':
        setSelectedRef(zoomRef);
        break;
      default:
        setSelectedRef(fadeRef);
    }
  }, [value]);

  if (value === 'Fade') {
    return (
      <Fade triggerOnce duration={800} delay={800} damping={0.2}>
        <Container>
          <AsciiImage
            asciiRef={fadeRef}
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            selectedBackgroundColor={selectedBackgroundColor}
          />
        </Container>
      </Fade>
    );
  }

  if (value === 'Flip') {
    return (
      <Flip triggerOnce duration={800} delay={800} damping={0.2}>
        <Container>
          <AsciiImage
            asciiRef={flipRef}
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            selectedBackgroundColor={selectedBackgroundColor}
          />
        </Container>
      </Flip>
    );
  }

  if (value === 'Bounce') {
    return (
      <Bounce triggerOnce duration={800} delay={800} damping={0.2}>
        <Container>
          <AsciiImage
            asciiRef={bounceRef}
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            selectedBackgroundColor={selectedBackgroundColor}
          />
        </Container>
      </Bounce>
    );
  }

  if (value === 'Hinge') {
    return (
      <Hinge triggerOnce duration={800} delay={800} damping={0.2}>
        <Container>
          <AsciiImage
            asciiRef={hingeRef}
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            selectedBackgroundColor={selectedBackgroundColor}
          />
        </Container>
      </Hinge>
    );
  }

  if (value === 'Jack') {
    return (
      <JackInTheBox triggerOnce duration={800} delay={800} damping={0.2}>
        <Container>
          <AsciiImage
            asciiRef={jackRef}
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            selectedBackgroundColor={selectedBackgroundColor}
          />
        </Container>
      </JackInTheBox>
    );
  }

  if (value === 'Roll') {
    return (
      <Roll triggerOnce duration={800} delay={800} damping={0.2}>
        <Container>
          <AsciiImage
            asciiRef={rollRef}
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            selectedBackgroundColor={selectedBackgroundColor}
          />
        </Container>
      </Roll>
    );
  }

  if (value === 'Rotate') {
    return (
      <Rotate triggerOnce duration={800} delay={800} damping={0.2}>
        <Container>
          <AsciiImage
            asciiRef={rotateRef}
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            selectedBackgroundColor={selectedBackgroundColor}
          />
        </Container>
      </Rotate>
    );
  }

  if (value === 'Slide') {
    return (
      <Slide triggerOnce duration={800} delay={800} damping={0.2}>
        <Container>
          <AsciiImage
            asciiRef={slideRef}
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            selectedBackgroundColor={selectedBackgroundColor}
          />
        </Container>
      </Slide>
    );
  }

  if (value === 'Zoom') {
    return (
      <Zoom triggerOnce duration={800} delay={800} damping={0.2}>
        <Container>
          <AsciiImage
            asciiRef={zoomRef}
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            selectedBackgroundColor={selectedBackgroundColor}
          />
        </Container>
      </Zoom>
    );
  }

  return <> </>;
};
