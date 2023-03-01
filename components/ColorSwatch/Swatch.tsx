import { Flex, useMantineColorScheme } from '@mantine/core';

export const Swatch = ({
  setSelectedColor,
  setShowColors,
}: {
  setSelectedColor: (color: string) => void;
  setShowColors: (show: boolean) => void;
}) => {
  const { colorScheme } = useMantineColorScheme();

  const isDark = colorScheme === 'dark';

  const colors = [
    { name: 'red', hex: '#ff0000' },
    { name: 'green', hex: '#00ff00' },
    { name: 'blue', hex: '#0000ff' },
    { name: 'yellow', hex: '#ffff00' },
    { name: 'cyan', hex: '#00ffff' },
    { name: 'magenta', hex: '#ff00ff' },
    { name: 'default', hex: isDark ? '#FFFFFF' : '#000000' },
  ];

  const selectedColor = (color: string) => {
    const noColor = '#329AEF';
    color === noColor ? setSelectedColor('') : setSelectedColor(color);
    setShowColors(false);
  };
  return (
    <Flex
      justify="space-evenly"
      style={{
        margin: 2,
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
          }}
          onClick={() => selectedColor(color.hex)}
        />
      ))}
    </Flex>
  );
};
