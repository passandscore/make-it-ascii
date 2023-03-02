import { Badge } from '@mantine/core';

export const RevealBadge = ({
  setShowColors,
  showColors,
}: {
  setShowColors: (show: boolean) => void;
  showColors: boolean;
}) => (
  <Badge
    variant="outline"
    size="lg"
    mt={10}
    mx={10}
    onClick={() => setShowColors(!showColors)}
    style={{
      cursor: 'pointer',
    }}
  >
    reveal
  </Badge>
);
