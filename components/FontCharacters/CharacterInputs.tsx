import { TextInput } from '@mantine/core';
import { fontCharacterInputsDefaultValue } from '../../constants';

const CharacterInputs = ({
  setSelectedChars,
  selectedChars,
}: {
  setSelectedChars: (chars: string) => void;
  selectedChars: string;
}) => (
  <TextInput
    placeholder={fontCharacterInputsDefaultValue}
    defaultValue={fontCharacterInputsDefaultValue}
    value={selectedChars || fontCharacterInputsDefaultValue}
    onChange={(e) => setSelectedChars(e.currentTarget.value)}
  />
);

export default CharacterInputs;
