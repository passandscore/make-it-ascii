import { Title, Text } from '@mantine/core';
import useStyles from './MakeItAsciiTitle.styles';

export const MakeItAsciiTitle = () => {
  const { classes } = useStyles();

  return (
    <div
      style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'inline-block',
        textAlign: 'center',
        maxWidth: '100%',
      }}
    >
      <Title className={classes.title} align="center">
        Make it{' '}
        <Text inherit variant="gradient" component="span">
          ASCII
        </Text>
      </Title>
    </div>
  );
};
