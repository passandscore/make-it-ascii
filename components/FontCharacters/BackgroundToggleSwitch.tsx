import { Switch } from '@mantine/core';

const BackgroundToggleSwitch = ({
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
    label="Add Background"
    onChange={() => {
      const currentChars = selectedChars.split('');
      console.log(currentChars);
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

export default BackgroundToggleSwitch;
