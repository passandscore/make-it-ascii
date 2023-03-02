import { Badge } from '@mantine/core';

export const FontColorBadge = ({
  resetBadges,
  setShowColors,
  showColors,
}: {
  resetBadges: () => void;
  setShowColors: (showColors: boolean) => void;
  showColors: boolean;
}) => (
  <Badge
    size="lg"
    mt={10}
    mx={10}
    onClick={() => {
      resetBadges();
      setShowColors(!showColors);
    }}
    style={{
      cursor: 'pointer',
    }}
  >
    Color
  </Badge>
);
