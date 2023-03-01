import { TextInput } from '@mantine/core';

export const Characters = ({
  setSelectedChars,
  selectedChars,
}: {
  setSelectedChars: (chars: string) => void;
  selectedChars: string;
}) => (
  <TextInput
    placeholder=" .:-= +*#%@|"
    label="Custom ASCII Characters"
    value={selectedChars}
    onChange={(e) => setSelectedChars(e.currentTarget.value)}
  />
);
