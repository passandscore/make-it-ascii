import { useRef } from 'react';
import { Box, Group, Text, useMantineTheme } from '@mantine/core';
import { IconUpload, IconX, IconDragDrop } from '@tabler/icons';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

export function ImageDropzone({
  imageUrl,
  setImageUrl,
  setHideOnDrag,
}: {
  imageUrl: string;
  setImageUrl: (url: string) => void;
  setHideOnDrag: (hide: boolean) => void;
}) {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);

  const handleDrop = (files: File[]) => {
    const file = files[0];

    const reader = new FileReader();
    reader.onload = () => {
      const link = URL.createObjectURL(files[0]);
      setImageUrl(link);
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      {!imageUrl && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -999,
            margin: 0,
            padding: 0,
          }}
        >
          <Dropzone
            openRef={openRef}
            onDrop={(files) => handleDrop(files)}
            onDragOver={() => setHideOnDrag(true)}
            onDragLeave={() => setHideOnDrag(false)}
            maxSize={3 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            style={{ border: 'none', background: 'none' }}
          >
            <Box
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 0,
                height: 0,
                borderTop: '200px solid #007bff',
                borderRight: '200px solid transparent',
                zIndex: 1,
                textAlign: 'center',
              }}
            />
            <Text
              size="lg"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 20,
                height: 0,
                zIndex: 2,
                color: '#fff',
                padding: '10px 0 0 5px',
              }}
            >
              <IconDragDrop size={100} stroke={1.5} />
            </Text>

            <Group
              position="center"
              spacing="xl"
              style={{
                minHeight: '100vh',
                pointerEvents: 'none',
                background: `${theme.colorScheme === 'dark' ? '#1A1B1E' : 'white'}`,
              }}
            >
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
              {/* <Dropzone.Idle>
                <IconPhoto size={50} stroke={1.5} />
              </Dropzone.Idle>

              <div>
                <Text size="xl" inline>
                  Drag images here or click to select files
                </Text>
              </div> */}
            </Group>
          </Dropzone>
        </div>
      )}
    </>
  );
}
