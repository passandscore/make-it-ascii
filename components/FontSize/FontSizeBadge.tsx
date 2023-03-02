import { Badge } from '@mantine/core';

export const FontSizeBadge = ({
  resetBadges,
  setShowFontSize,
  selectedFontSize,
}: {
  resetBadges: () => void;
  setShowFontSize: (arg: boolean) => void;
  selectedFontSize: number;
}) => (
  <Badge
    variant="outline"
    size="lg"
    mt={10}
    mx={10}
    onClick={() => {
      resetBadges();
      setShowFontSize(true);
    }}
    style={{
      cursor: 'pointer',
      width: '6rem',
    }}
  >
    {`${selectedFontSize}px`}
  </Badge>
);
