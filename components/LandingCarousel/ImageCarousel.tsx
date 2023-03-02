import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';

export const ImageCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 2500 }));

  const images = [
    '/images/apple-ascii.png',
    '/images/eth-ascii.png',
    '/images/minecraft-ascii.png',
    '/images/nhl-ascii.png',
    '/images/youtube-ascii.png',
  ];

  return (
    <>
      <Carousel
        maw={400}
        mx="auto"
        mt={20}
        loop
        withIndicators={false}
        withControls={false}
        height="auto"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {images.map((src) => (
          <Carousel.Slide>
            <Image src={src} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};
