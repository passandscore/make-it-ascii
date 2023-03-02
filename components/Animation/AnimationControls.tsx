import { ActionIcon, Flex } from '@mantine/core';
import { IconPlayerPlayFilled, IconPlayerStopFilled } from '@tabler/icons-react';
// import { AnimationSpeedSlider } from './AnimationSpeedSlider';

export const AnimationControls = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        width: '100%',
      }}
    >
      {/* <AnimationSpeedSlider setSetAnimationSpeed={setSetAnimationSpeed} /> */}

      {/* play button */}
      <ActionIcon variant="filled" size="md" style={{ marginRight: '1rem', cursor: 'pointer' }}>
        <IconPlayerPlayFilled size="1rem" onClick={handleClick} />
      </ActionIcon>

      {/* stop button */}
      <ActionIcon
        variant="filled"
        size="md"
        style={{ cursor: 'pointer' }}
        // onClick={() => setStopAnimation(true)}
      >
        <IconPlayerStopFilled size="1rem" />
      </ActionIcon>
    </Flex>
  );
};
