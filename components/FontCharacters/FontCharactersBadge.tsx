import { Badge } from '@mantine/core';

export const FontCharactersBadge = ({
  resetBadges,
  setShowCharacterInput,
  selectedChars,
  showCharacterInput,
  setSelectedFeature,
  selectedFeature,
}: {
  resetBadges: () => void;
  setShowCharacterInput: (show: boolean) => void;
  selectedChars: string;
  showCharacterInput: boolean;
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
      setShowCharacterInput(!showCharacterInput);
      selectedFeature === 'Characters' ? setSelectedFeature('') : setSelectedFeature('Characters');
    }}
    style={{
      cursor: 'pointer',
      width: '8rem',
    }}
  >
    {selectedChars || 'Characters'}
  </Badge>
);
