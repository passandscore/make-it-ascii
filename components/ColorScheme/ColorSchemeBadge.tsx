import { Badge, useMantineColorScheme } from '@mantine/core';

export const ColorSchemeBadge = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Badge
      variant="outline"
      size="lg"
      mt={10}
      mx={10}
      onClick={() => toggleColorScheme()}
      style={{
        cursor: 'pointer',
      }}
    >
      {colorScheme === 'light' ? 'dark' : 'light'}
    </Badge>
  );
};
