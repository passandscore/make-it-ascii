import { useRef } from 'react';
import { Button, Group, Text, useMantineTheme } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

export function ImageDropzone(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);
  return (
    <>
      <Dropzone
        openRef={openRef}
        onDrop={(files) => console.log('accepted files', files)}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        {...props}
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
      <Group position="center" mt="md">
        <Button
          onClick={() => openRef.current()}
          variant="outline"
          color="teal"
          size="lg"
          mt="xl"
          mx="auto"
          display="block"
        >
          Select file
        </Button>
      </Group>
    </>
  );
}
