import { Badge } from '@mantine/core';

export const FontCharactersBadge = ({
  resetBadges,
  setShowCharacterInput,
  selectedChars,
}: {
  resetBadges: () => void;
  setShowCharacterInput: (show: boolean) => void;
  selectedChars: string;
}) => (
  <Badge
    variant="outline"
    size="lg"
    mt={10}
    mx={10}
    onClick={() => {
      resetBadges();
      setShowCharacterInput(true);
    }}
    style={{
      cursor: 'pointer',
    }}
  >
    {selectedChars || 'Characters'}
  </Badge>
);
