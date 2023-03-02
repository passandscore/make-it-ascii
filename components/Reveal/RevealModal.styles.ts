import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  card: {
    width: 125,
    height: 125,
    backgroundColor: theme.colorScheme === 'dark' ? '#25262B' : theme.white,
    border: theme.colorScheme !== 'dark' ? '1px solid lightGray' : 'none',
    '&:hover': {
      boxShadow: `0 0 0 2px ${theme.colors.blue[5]}`,
    },
  },
  flex: {
    cursor: 'pointer',
    height: '100%',
  },
}));
