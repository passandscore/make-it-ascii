import { Slider } from '@mantine/core';

const FontSizeSlider = ({
  selectedFontDefaultValue,
  setSelectedFontSize,
}: {
  selectedFontDefaultValue: number;
  setSelectedFontSize: (arg: number) => void;
}) => (
  <Slider
    size="lg"
    radius="lg"
    defaultValue={selectedFontDefaultValue}
    marks={[
      { value: 0, label: '8px' },
      { value: 25, label: '10px' },
      { value: 50, label: '12px' },
      { value: 75, label: '14px' },
      { value: 100, label: '16px' },
    ]}
    style={{
      width: '50%',
    }}
    onChange={(value) => {
      const fontSize = ((value / 100) * 8 + 8).toFixed(2);
      setSelectedFontSize(Number(fontSize));
    }}
  />
);

export default FontSizeSlider;
