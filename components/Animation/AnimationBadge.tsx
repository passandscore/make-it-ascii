import { Badge } from '@mantine/core';

export const AnimationBadge = ({
  resetBadges,
  setShowAnimationControls,
  showAnimationControls,
  setSelectedFeature,
}: {
  resetBadges: () => void;
  setShowAnimationControls: (value: boolean) => void;
  showAnimationControls: boolean;
  setSelectedFeature: (feature: string) => void;
}) => (
  <Badge
    size="lg"
    mt={10}
    mx={10}
    onClick={() => {
      resetBadges();
      setShowAnimationControls(!showAnimationControls);
      setSelectedFeature('Animation');
    }}
    style={{
      cursor: 'pointer',
    }}
  >
    Animate
  </Badge>
);
