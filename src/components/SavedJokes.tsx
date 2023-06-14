import { Button, Card, Grid, Stack } from "@mantine/core";
import { FunctionComponent } from "react";
import { FaSkullCrossbones } from "react-icons/fa";
import { DadJokeResponse } from "../api/jokes";

interface SavedJokesProps {
  jokes: DadJokeResponse[];
  onRemove: (id: string) => void;
}

const SavedJokes: FunctionComponent<SavedJokesProps> = ({
  jokes,
  onRemove,
}) => {
  return (
    <Stack spacing="md">
      {jokes.map((joke) => (
        <SavedJokesItem key={joke.id} data={joke} onRemove={onRemove} />
      ))}
    </Stack>
  );
};

interface SavedJokesItemProps {
  data: DadJokeResponse;
  onRemove: (id: string) => void;
}

const SavedJokesItem: FunctionComponent<SavedJokesItemProps> = ({
  data,
  onRemove,
}) => {
  const { joke, id } = data;

  return (
    <Card padding="md">
      <Grid align="center" justify="space-between">
        <Grid.Col span={11}>{joke}</Grid.Col>
        <Grid.Col span={1}>
          <Button variant="subtle" color="red" onClick={() => onRemove(id)}>
            <FaSkullCrossbones />
          </Button>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default SavedJokes;
export { SavedJokesItem };
