import { FunctionComponent, useEffect, useState } from "react";
import { Alert, Container, Divider, Stack, Title } from "@mantine/core";
import { FaTimesCircle } from "react-icons/fa";
import JokeCard from "./components/JokeCard";
import getDadJoke, { DadJokeResponse } from "./api/jokes";
import JokeActions from "./components/JokeActions";
import SavedJokes from "./components/SavedJokes";
import DeleteModal from "./components/DeleteModal";
import JokeFilter from "./components/JokeFilter";
import { useFilter } from "./hooks/useFilter";

const App: FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [deleteJokeId, setDeleteJokeId] = useState<string | null>();

  const [joke, setJoke] = useState<DadJokeResponse | null>(null);
  const [savedJokes, setSavedJokes] = useState<DadJokeResponse[]>([]);

  const [filter, setFilter] = useState<string>("");
  const { filterData, filteredData } = useFilter(savedJokes);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const data = await getDadJoke();
      setJoke(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const saveJoke = () => {
    if (!joke) return;

    if (savedJokes.find((savedJoke) => savedJoke.id === joke.id)) return;

    setSavedJokes((prev) => [...prev, joke]);
    setFilter("");
  };

  const promptJokeRemoval = (id: string) => {
    setDeleteJokeId(id);
    setDeleteModalOpen(true);
  };

  const removeJoke = (id: string) => {
    setSavedJokes((prev) => {
      const copy = [...prev];
      const jokeIndex = copy.findIndex((joke) => joke.id === id);
      copy.splice(jokeIndex, 1);
      return copy;
    });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const handleFilterChange = (value: string) => {
    filterData(value);
    setFilter(value);
  };

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

          {joke && <JokeCard text={joke.joke} loading={loading} />}

          <JokeActions
            onSave={saveJoke}
            onNext={fetchJoke}
            disabled={loading}
          />

          {savedJokes.length > 0 && (
            <>
              <Divider />

              <JokeFilter value={filter} onChange={handleFilterChange} />

              <Title order={2} align="center">
                Saved Jokes
              </Title>

              <SavedJokes jokes={filteredData} onRemove={promptJokeRemoval} />
            </>
          )}
        </Stack>
      )}

      <DeleteModal
        open={deleteModalOpen}
        onAnswer={(remove) => {
          if (remove && deleteJokeId) {
            removeJoke(deleteJokeId);
          }

          setDeleteJokeId(null);
          setDeleteModalOpen(false);
          setFilter("");
        }}
      />
    </Container>
  );
};

export default App;
