import { Badge } from '@mantine/core';

export const BackgroundColorBadge = ({
  resetBadges,
  setShowBackgroundColors,
  showBackgroundColors,
}: {
  resetBadges: () => void;
  setShowBackgroundColors: (showColors: boolean) => void;
  showBackgroundColors: boolean;
}) => (
  <Badge
    size="lg"
    mt={10}
    mx={10}
    onClick={() => {
      resetBadges();
      setShowBackgroundColors(!showBackgroundColors);
    }}
    style={{
      cursor: 'pointer',
    }}
  >
    Background
  </Badge>
);
