import { Button, Card, Grid, Stack } from "@mantine/core";
import { FunctionComponent } from "react";
import { FaSkullCrossbones } from "react-icons/fa";

interface SavedJokesProps {
  jokes: string[];
  onRemove: (index: number) => void;
}

const SavedJokes: FunctionComponent<SavedJokesProps> = ({
  jokes,
  onRemove,
}) => {
  return (
    <Stack spacing="md">
      {jokes.map((joke, i) => (
        <SavedJokesItem key={i} index={i} joke={joke} onRemove={onRemove} />
      ))}
    </Stack>
  );
};

interface SavedJokesItemProps {
  index: number;
  joke: string;
  onRemove: (index: number) => void;
}

const SavedJokesItem: FunctionComponent<SavedJokesItemProps> = ({
  index,
  joke,
  onRemove,
}) => {
  return (
    <Card padding="md">
      <Grid align="center" justify="space-between">
        <Grid.Col span={11}>{joke}</Grid.Col>
        <Grid.Col span={1}>
          <Button variant="subtle" color="red" onClick={() => onRemove(index)}>
            <FaSkullCrossbones />
          </Button>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default SavedJokes;
export { SavedJokesItem };
