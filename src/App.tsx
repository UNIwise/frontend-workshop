import { FunctionComponent, useEffect, useState } from "react";
import { Alert, Container, Divider, Stack, Title } from "@mantine/core";
import { FaTimesCircle } from "react-icons/fa";
import JokeCard from "./components/JokeCard";
import getDadJoke from "./api/jokes";
import JokeActions from "./components/JokeActions";
import SavedJokes from "./components/SavedJokes";
import DeleteModal from "./components/DeleteModal";

const App: FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [deleteJokeIndex, setDeleteJokeIndex] = useState<number | undefined>();

  const [joke, setJoke] = useState<string>("");
  const [savedJokes, setSavedJokes] = useState<string[]>([]);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const joke = await getDadJoke();
      setJoke(joke);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const saveJoke = () => {
    setSavedJokes((prev) => [...prev, joke]);
  };

  const promptJokeRemoval = (index: number) => {
    setDeleteJokeIndex(index);
    setDeleteModalOpen(true);
  };

  const removeJoke = (index: number) => {
    setSavedJokes((prev) => {
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Container size="sm">
      {error ? (
        <Alert
          icon={<FaTimesCircle size="1rem" />}
          title="Bummer!"
          color="red"
          variant="filled"
        >
          There was an error fetching dad jokes. Please try again later.
        </Alert>
      ) : (
        <Stack spacing="xl">
          <Title
            order={1}
            size="6rem"
            align="center"
            sx={{
              fontFamily: "Bangers",
            }}
          >
            Dad Jokes
          </Title>

          <JokeCard text={joke} loading={loading} />

          <JokeActions onSave={saveJoke} onNext={fetchJoke} disabled={loading} />

          {savedJokes.length > 0 && (
            <>
              <Divider />

              <Title order={2} align="center">
                Saved Jokes
              </Title>

              <SavedJokes jokes={savedJokes} onRemove={promptJokeRemoval} />
            </>
          )}
        </Stack>
      )}

      <DeleteModal
        open={deleteModalOpen}
        onAnswer={(remove) => {
          if (remove && deleteJokeIndex) {
            removeJoke(deleteJokeIndex);
          }

          setDeleteModalOpen(false);
          setDeleteJokeIndex(undefined);
        }}
      />
    </Container>
  );
};

export default App;
