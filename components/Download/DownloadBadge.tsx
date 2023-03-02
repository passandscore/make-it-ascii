import { Badge } from '@mantine/core';

export const DownloadBadge = ({
  setShowDownloadOptions,
  showDownloadOptions,
  resetBadges,
  selectedFeature,
  setSelectedFeature,
}: {
  setShowDownloadOptions: (show: boolean) => void;
  showDownloadOptions: boolean;
  resetBadges: () => void;
  selectedFeature: string;
  setSelectedFeature: (feature: string) => void;
}) => (
  <Badge
    variant="outline"
    size="lg"
    mt={10}
    mx={10}
    onClick={() => {
      resetBadges();
      setShowDownloadOptions(!showDownloadOptions);
      selectedFeature === 'Download' ? setSelectedFeature('') : setSelectedFeature('Download');
    }}
    style={{
      cursor: 'pointer',
    }}
  >
    download
  </Badge>
);
