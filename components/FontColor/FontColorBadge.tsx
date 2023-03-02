import { Badge } from '@mantine/core';

export const FontColorBadge = ({
  resetBadges,
  setShowColors,
  showColors,
  selectedColor,
}: {
  resetBadges: () => void;
  setShowColors: (showColors: boolean) => void;
  showColors: boolean;
  selectedColor: string;
}) => (
  <Badge
    variant="outline"
    size="lg"
    mt={10}
    mx={10}
    onClick={() => {
      resetBadges();
      setShowColors(!showColors);
    }}
    style={{
      color: selectedColor || '#329AEF',
      borderColor: selectedColor || '#329AEF',
      cursor: 'pointer',
    }}
  >
    Color
  </Badge>
);
