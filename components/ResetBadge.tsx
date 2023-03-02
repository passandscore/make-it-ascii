import { Badge } from '@mantine/core';

export const ResetBadge = ({ handleReset }: { handleReset: () => void }) => (
  <Badge
    variant="outline"
    size="lg"
    mt={10}
    mx={10}
    onClick={() => {
      handleReset();
    }}
    style={{
      color: 'red',
      borderColor: 'red',
      cursor: 'pointer',
    }}
  >
    Reset
  </Badge>
);
