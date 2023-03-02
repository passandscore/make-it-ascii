import { Slider } from '@mantine/core';

export const AnimationSpeedSlider = ({
  setSetAnimationSpeed,
}: {
  setSetAnimationSpeed: (value: number) => void;
}) => (
  <Slider
    size="lg"
    radius="lg"
    marks={[
      { value: 0, label: '0.5s' },
      { value: 25, label: '1s' },
      { value: 50, label: '1.5s' },
      { value: 75, label: '2s' },
      { value: 100, label: '2.5s' },
    ]}
    defaultValue={50}
    style={{
      width: '50%',
      marginRight: '1rem',
    }}
    onChange={(value) => {
      // convert the value to a speed in seconds
      const speed = (value / 100) * 2.5 + 0.5;
      setSetAnimationSpeed(speed);
    }}
  />
);
