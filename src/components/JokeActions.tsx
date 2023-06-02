import { Button, Grid } from "@mantine/core";
import { FunctionComponent } from "react";
import { FaArrowRight, FaBookmark } from "react-icons/fa";

interface JokeActionsProps {
  disabled: boolean;
  onSave: () => void;
  onNext: () => void;
}

const JokeActions: FunctionComponent<JokeActionsProps> = ({
  disabled,
  onSave,
  onNext,
}) => {
  return (
    <Grid>
      <Grid.Col span={6}>
        <Button
          fullWidth
          size="lg"
          leftIcon={<FaBookmark />}
          onClick={onSave}
          disabled={disabled}
        >
          Save
        </Button>
      </Grid.Col>
      <Grid.Col span={6}>
        <Button
          fullWidth
          size="lg"
          rightIcon={<FaArrowRight />}
          onClick={onNext}
          disabled={disabled}
        >
          one more!
        </Button>
      </Grid.Col>
    </Grid>
  );
};

export default JokeActions;
