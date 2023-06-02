import { Card, Loader } from "@mantine/core";
import { FunctionComponent } from "react";

interface JokeCardProps {
  text: string;
  loading?: boolean;
}

const JokeCard: FunctionComponent<JokeCardProps> = ({ text, loading }) => {
  return (
    <Card
      padding="md"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        fontSize: "32px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? <Loader color="#fff" /> : text}
    </Card>
  );
};

export default JokeCard;
