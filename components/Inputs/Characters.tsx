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
    defaultValue=" .:-= +*#%@|"
    value={selectedChars}
    onChange={(e) => setSelectedChars(e.currentTarget.value)}
  />
);
