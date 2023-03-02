import { Badge } from '@mantine/core';

export const RevealBadge = ({
  setOpenRevealModal,
  openRevealModal,
}: {
  setOpenRevealModal: (openRevealModal: boolean) => void;
  openRevealModal: boolean;
}) => (
  <Badge
    variant="outline"
    size="lg"
    mt={10}
    mx={10}
    onClick={() => setOpenRevealModal(!openRevealModal)}
    style={{
      cursor: 'pointer',
    }}
  >
    reveal
  </Badge>
);
