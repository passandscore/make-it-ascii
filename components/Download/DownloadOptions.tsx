import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconPhoto, Icon123 } from '@tabler/icons';

export const DownloadButtons = ({
  downloadContentToImage,
  downloadContentAsText,
  asciiRef,
}: {
  downloadContentToImage: (asciiRef: React.MutableRefObject<HTMLDivElement | null>) => void;
  downloadContentAsText: (asciiRef: React.MutableRefObject<HTMLDivElement | null>) => void;
  asciiRef: React.MutableRefObject<HTMLDivElement | null>;
}) => (
  <>
    <Button
      variant="light"
      rightIcon={<IconPhoto size={20} stroke={1.5} />}
      radius="xl"
      size="md"
      mx={20}
      styles={{
        root: { paddingRight: 14, height: 48 },
        rightIcon: { marginLeft: 22 },
      }}
      onClick={() => {
        downloadContentToImage(asciiRef);
        showNotification({
          title: 'Make it ASCII 😎',
          message: 'Downloaded as an image',
        });
      }}
    >
      Save as image
    </Button>

    <Button
      variant="light"
      rightIcon={<Icon123 size={20} stroke={1.5} />}
      radius="xl"
      size="md"
      styles={{
        root: { paddingRight: 14, height: 48 },
        rightIcon: { marginLeft: 22 },
      }}
      onClick={() => {
        downloadContentAsText(asciiRef);
        showNotification({
          title: 'Make it ASCII 😎',
          message: 'Downloaded as text',
        });
      }}
    >
      Save as text
    </Button>
  </>
);
