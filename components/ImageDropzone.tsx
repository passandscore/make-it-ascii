import { useRef } from 'react';
import { Button, Group, Text, useMantineTheme, MantineSize } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

export function ImageDropzone({
  handleDrop,
  imageUrl,
  setImageUrl,
  width,
}: {
  handleDrop: (files: File[]) => void;
  imageUrl: string;
  setImageUrl: (url: string) => void;
  width: number;
}) {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);

  const handleSelectFile = (e: any) => {
    if (e.target.innerText === 'Reset') {
      setImageUrl('');
      return;
    }

    if (openRef.current) {
      openRef.current();
    }
  };

  const handleButtonSize = (): MantineSize => {
    if (width < 600) {
      return 'xs';
    }
    if (width < 900) {
      return 'sm';
    }
    if (width < 1200) {
      return 'md';
    }
    if (width < 1500) {
      return 'lg';
    }
    return 'xl';
  };

  return (
    <>
      {!imageUrl && (
        <Dropzone
          openRef={openRef}
          onDrop={(files) => handleDrop(files)}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
        >
          <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
            <Dropzone.Accept>
              <IconUpload
                size={50}
                stroke={1.5}
                color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                size={50}
                stroke={1.5}
                color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto size={50} stroke={1.5} />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
            </div>
          </Group>
        </Dropzone>
      )}

      <Group position="center" mt="md">
        <Button
          onClick={(e) => handleSelectFile(e)}
          variant="outline"
          color="teal"
          size={handleButtonSize()}
          mt="xl"
          mx="auto"
          display="block"
        >
          {(imageUrl && 'Reset') || 'Select file'}
        </Button>
      </Group>
    </>
  );
}
