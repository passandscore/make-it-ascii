import { Badge } from '@mantine/core';

export const FontSizeBadge = ({
  resetBadges,
  setShowFontSize,
  selectedFontSize,
  showFontSize,
  setSelectedFeature,
  selectedFeature,
}: {
  resetBadges: () => void;
  setShowFontSize: (arg: boolean) => void;
  selectedFontSize: number;
  showFontSize: boolean;
  setSelectedFeature: (feature: string) => void;
  selectedFeature: string;
}) => (
  <Badge
    variant="outline"
    size="lg"
    mt={10}
    mx={10}
    onClick={() => {
      resetBadges();
      setShowFontSize(!showFontSize);
      selectedFeature === 'Font Size' ? setSelectedFeature('') : setSelectedFeature('Font Size');
    }}
    style={{
      cursor: 'pointer',
      width: '6rem',
    }}
  >
    {`${selectedFontSize}px`}
  </Badge>
);
