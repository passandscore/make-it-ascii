import { Tooltip } from '@mantine/core';
import { IconQuestionCircle } from '@tabler/icons-react';
import { defaultBadgeColor } from '../../constants';

export const QuestionMarkTooltip = () => {
  const label = 'Add or removes the first character (space) from the selected characters.';

  return (
    <Tooltip
      label={label}
      color="blue"
      position="bottom"
      arrowPosition="center"
      style={{ cursor: 'pointer' }}
    >
      <IconQuestionCircle
        size="1.3rem"
        style={{ marginBottom: 10, color: defaultBadgeColor, strokeWidth: '1.8px' }}
      />
    </Tooltip>
  );
};
