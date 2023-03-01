import { useRef } from 'react';
import { Group, Text, useMantineTheme } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

export function ImageDropzone({
  handleDrop,
  imageUrl,
}: {
  handleDrop: (files: File[]) => void;
  imageUrl: string;
}) {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);

  return (
    <>
      {!imageUrl && (
        <Dropzone
          openRef={openRef}
          onDrop={(files) => handleDrop(files)}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
        >
          <Group position="center" spacing="xl" style={{ minHeight: 75, pointerEvents: 'none' }}>
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
    </>
  );
}
