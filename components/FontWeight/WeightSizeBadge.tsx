import { Badge } from '@mantine/core';

export const WeightSizeBadge = ({
  resetBadges,
  setSelectedFontWeight,
  selectedFontWeight,
  setSelectedFeature,
}: {
  resetBadges: () => void;
  setSelectedFontWeight: (arg: string) => void;
  selectedFontWeight: string;
  setSelectedFeature: (arg: string) => void;
}) => (
  <Badge
    variant="outline"
    size="lg"
    mt={10}
    mx={10}
    onClick={() => {
      resetBadges();
      setSelectedFeature('');
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
