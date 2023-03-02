import { Title, Text } from '@mantine/core';
import useStyles from './MakeItAsciiTitle.styles';

export const MakeItAsciiTitle = () => {
  const { classes } = useStyles();

  return (
    <Title className={classes.title} align="center" mt={100}>
      Make it{' '}
      <Text inherit variant="gradient" component="span">
        ASCII
      </Text>
    </Title>
  );
};
