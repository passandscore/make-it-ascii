import { Badge } from '@mantine/core';

export const FontColorBadge = ({
  resetBadges,
  setShowColors,
  showColors,
  setSelectedFeature,
  selectedFeature,
}: {
  resetBadges: () => void;
  setShowColors: (showColors: boolean) => void;
  showColors: boolean;
  setSelectedFeature: (feature: string) => void;
  selectedFeature: string;
}) => (
  <Badge
    size="lg"
    mt={10}
    mx={10}
    onClick={() => {
      resetBadges();
      setShowColors(!showColors);
      selectedFeature === 'Font Color' ? setSelectedFeature('') : setSelectedFeature('Font Color');
    }}
    style={{
      cursor: 'pointer',
    }}
  >
    Color
  </Badge>
);
