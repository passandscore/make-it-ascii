import { Card, Flex, Grid, Modal, Text } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import useStyles from './RevealModal.styles';

export const RevealModal = ({
  openRevealModal,
  setOpenRevealModal,
}: {
  openRevealModal: boolean;
  setOpenRevealModal: (openRevealModal: boolean) => void;
}) => {
  const { classes } = useStyles();

  const [, setValue] = useLocalStorage({ key: 'reveal', defaultValue: 'Fade' });

  const effects = ['Bounce', 'Fade', 'Flip', 'Hinge', 'Jack', 'Roll', 'Rotate', 'Slide', 'Zoom'];

  const choiceHandler = (choice: string) => {
    setValue(choice);
    setOpenRevealModal(false);
  };

  return (
    <Modal
      opened={openRevealModal}
      onClose={() => setOpenRevealModal(false)}
      title="Revealing Effects"
      centered
      size="md"
      closeOnClickOutside={false}
    >
      <Grid
        mt={10}
        mb={10}
        justify="center"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gridGap: 10 }}
      >
        {effects.map((_, index) => (
          <Card key={index} className={classes.card} onClick={() => choiceHandler(effects[index])}>
            <Flex justify="center" align="center" className={classes.flex}>
              <Text
                inherit
                variant="gradient"
                style={{
                  transform: 'capitalize',
                  fontSize: 25,
                  fontWeight: 900,
                  letterSpacing: -1,
                }}
              >
                {effects[index]}
              </Text>
            </Flex>
          </Card>
        ))}
      </Grid>
    </Modal>
  );
};
