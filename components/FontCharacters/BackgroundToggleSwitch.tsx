import { Switch } from '@mantine/core';

export const BackgroundToggleSwitch = ({
  selectedChars,
  backgroundState,
  setBackgroundState,
  setSelectedChars,
}: {
  selectedChars: string;
  backgroundState: string;
  setBackgroundState: (state: string) => void;
  setSelectedChars: (chars: string) => void;
}) => (
  <Switch
    ml={20}
    mr={5}
    label="Background"
    onChange={() => {
      const currentChars = selectedChars.split('');
      if (backgroundState === 'transparent') {
        setBackgroundState('visible');
        currentChars.shift();
      } else {
        setBackgroundState('transparent');
        currentChars.unshift(' ');
      }
      const newChars = currentChars.join('');
      setSelectedChars(newChars);
    }}
  />
);
