import { Badge } from '@mantine/core';

const DownloadBadge = ({
  setShowColors,
  setShowFontSize,
  setShowCharacterInput,
  setShowDownloadOptions,
}: {
  setShowColors: (show: boolean) => void;
  setShowFontSize: (show: boolean) => void;
  setShowCharacterInput: (show: boolean) => void;
  setShowDownloadOptions: (show: boolean) => void;
}) => (
  <Badge
    variant="outline"
    size="lg"
    mt={10}
    mx={10}
    onClick={() => {
      setShowColors(false);
      setShowFontSize(false);
      setShowCharacterInput(false);
      setShowDownloadOptions(true);
    }}
    style={{
      cursor: 'pointer',
    }}
  >
    download
  </Badge>
);

export default DownloadBadge;
