import { Badge } from '@mantine/core';

export const WeightSizeBadge = ({
  resetBadges,
  setSelectedFontWeight,
  selectedFontWeight,
}: {
  resetBadges: () => void;
  setSelectedFontWeight: (arg: string) => void;
  selectedFontWeight: string;
}) => (
  <Badge
    variant="outline"
    size="lg"
    mt={10}
    mx={10}
    onClick={() => {
      resetBadges();
      selectedFontWeight === 'normal'
        ? setSelectedFontWeight('bold')
        : setSelectedFontWeight('normal');
    }}
    style={{
      cursor: 'pointer',
      fontWeight: selectedFontWeight === 'normal' ? 'normal' : 'bold',
    }}
  >
    weight
  </Badge>
);
