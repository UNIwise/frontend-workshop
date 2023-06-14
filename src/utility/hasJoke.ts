import { DadJokeResponse } from "../api/jokes";

export const hasJoke = (
  joke: DadJokeResponse | null,
  jokes: DadJokeResponse[]
): boolean => {
  if (!joke || jokes.find((currentJoke) => currentJoke.id === joke.id))
    return false;

  return true;
};
