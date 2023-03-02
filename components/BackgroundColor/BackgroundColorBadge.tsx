import { Badge } from '@mantine/core';

export const BackgroundColorBadge = ({
  resetBadges,
  setShowBackgroundColors,
  showBackgroundColors,
  setSelectedFeature,
  selectedFeature,
}: {
  resetBadges: () => void;
  setShowBackgroundColors: (showColors: boolean) => void;
  showBackgroundColors: boolean;
  setSelectedFeature: (feature: string) => void;
  selectedFeature: string;
}) => (
  <Badge
    size="lg"
    mt={10}
    mx={10}
    onClick={() => {
      resetBadges();
      setShowBackgroundColors(!showBackgroundColors);
      selectedFeature === 'Background Color'
        ? setSelectedFeature('')
        : setSelectedFeature('Background Color');
    }}
    style={{
      cursor: 'pointer',
    }}
  >
    Background
  </Badge>
);
