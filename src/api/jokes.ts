interface DadJokeResponse {
  id: string;
  joke: string;
  status: number;
}

const getDadJoke = async (): Promise<DadJokeResponse> => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  // sleep for 1 second to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data: DadJokeResponse = await response.json();
  return data;
};

export default getDadJoke;
export type { DadJokeResponse };
