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
  asciiRef,
  selectedBackgroundColor,
}: {
  src: string;
  selectedColor: string;
  selectedChars: string;
  selectedFontSize: string;
  selectedFontWeight: string;
  asciiRef: any;
  selectedBackgroundColor: string;
}) => {
  const [value] = useLocalStorage({ key: 'reveal', defaultValue: 'Fade' });

  if (value === 'Fade') {
    return (
      <Fade triggerOnce duration={800} delay={800} damping={0.2}>
        <Container>
          <AsciiImage
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            asciiRef={asciiRef}
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
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            asciiRef={asciiRef}
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
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            asciiRef={asciiRef}
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
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            asciiRef={asciiRef}
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
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            asciiRef={asciiRef}
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
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            asciiRef={asciiRef}
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
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            asciiRef={asciiRef}
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
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            asciiRef={asciiRef}
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
            src={src}
            selectedColor={selectedColor}
            selectedChars={selectedChars}
            selectedFontSize={String(selectedFontSize)}
            selectedFontWeight={selectedFontWeight}
            asciiRef={asciiRef}
            selectedBackgroundColor={selectedBackgroundColor}
          />
        </Container>
      </Zoom>
    );
  }

  return <> </>;
};
