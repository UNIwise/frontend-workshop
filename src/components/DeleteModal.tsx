import { Button, Group, Modal, Text } from "@mantine/core";
import { FunctionComponent } from "react";

interface Props {
  open: boolean;
  onAnswer: (answer: boolean) => void;
}

const DeleteModal: FunctionComponent<Props> = ({ open, onAnswer }) => {
  return (
    <Modal opened={open} onClose={close} withCloseButton={false} size="lg">
      <Group
        position="center"
        sx={{
          margin: "2rem",
          textAlign: "center",
        }}
      >
        <Text size="xl">Are you sure you want to remove the joke?</Text>
      </Group>

      <Group position="right">
        <Button
          color="red"
          onClick={() => onAnswer(false)}
          sx={{ flexGrow: 1 }}
        >
          Nope
        </Button>
        <Button
          color="green"
          onClick={() => onAnswer(true)}
          sx={{ flexGrow: 1 }}
        >
          Yeah
        </Button>
      </Group>
    </Modal>
  );
};

export default DeleteModal;
