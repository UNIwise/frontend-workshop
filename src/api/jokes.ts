interface GetDadJokeResponse {
  id: string;
  joke: string;
  status: number;
}

const getDadJoke = async (): Promise<string> => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  // sleep for 1 second to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data: GetDadJokeResponse = await response.json();
  return data.joke;
};

export default getDadJoke;
export type { GetDadJokeResponse };
