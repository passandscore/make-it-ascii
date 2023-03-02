import { Tooltip } from '@mantine/core';
import { IconQuestionCircle } from '@tabler/icons-react';
import { defaultBadgeColor } from '../../constants';

export const QuestionMarkTooltip = () => {
  const label = 'Place a space as the first character to remove the background.';

  return (
    <Tooltip
      label={label}
      color="blue"
      position="bottom"
      arrowPosition="center"
      style={{ cursor: 'pointer', marginTop: '10px' }}
    >
      <IconQuestionCircle
        size="1.7rem"
        style={{ marginLeft: '10px', color: defaultBadgeColor, strokeWidth: '1.5px' }}
      />
    </Tooltip>
  );
};
