import { Badge } from '@mantine/core';

const FontSizeBadge = ({
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
    }}
  >
    {`${selectedFontSize}px`}
  </Badge>
);

export default FontSizeBadge;
