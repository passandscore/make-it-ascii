import { TextInput } from '@mantine/core';
import { fontCharacterInputsDefaultValue } from '../../constants';

export const CharacterInputs = ({
  setSelectedChars,
  selectedChars,
}: {
  setSelectedChars: (chars: string) => void;
  selectedChars: string;
}) => (
  <TextInput
    placeholder={fontCharacterInputsDefaultValue}
    value={selectedChars}
    onChange={(e) => setSelectedChars(e.currentTarget.value)}
  />
);
