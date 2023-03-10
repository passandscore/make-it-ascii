import { Flex } from '@mantine/core';
import { defaultBadgeColor } from '../../constants';

export const BackgroundColorSwatch = ({
  setSelectedBackgroundColor,
  setShowBackgroundColors,
  setSelectedFeature,
}: {
  setSelectedBackgroundColor: (color: string) => void;
  setShowBackgroundColors: (show: boolean) => void;
  setSelectedFeature: (feature: string) => void;
}) => {
  const colors = [
    { name: 'black', hex: '#1A1B1E', border: '1px solid #FFFFFF' },
    { name: 'red', hex: '#ff0000' },
    { name: 'green', hex: '#00ff00' },
    { name: 'blue', hex: '#0000ff' },
    { name: 'yellow', hex: '#ffff00' },
    { name: 'cyan', hex: '#00ffff' },
    { name: 'magenta', hex: '#ff00ff' },
    { name: 'white', hex: '#FFFFFF', border: '1px solid #000000' },
    { name: 'transparent', hex: 'transparent', backgroundImage: 'url(images/transparent-bg.jpeg)' },
  ];

  const selectedBackgroundColor = (color: string) => {
    const noColor = defaultBadgeColor;
    color === noColor ? setSelectedBackgroundColor('') : setSelectedBackgroundColor(color);
    setShowBackgroundColors(false);
    setSelectedFeature('');
  };
  return (
    <Flex
      justify="space-evenly"
      px={4}
      style={{
        margin: 2,
        borderRadius: 40,
      }}
    >
      {colors.map((color) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        <div
          key={color.name}
          style={{
            width: '1.7rem',
            height: '1.7rem',
            backgroundColor: color.hex,
            borderRadius: '50%',
            cursor: 'pointer',
            margin: 8,
            border: color.border || 'none',
            backgroundImage: color.backgroundImage || 'none',
          }}
          onClick={() => selectedBackgroundColor(color.hex)}
        />
      ))}
    </Flex>
  );
};
