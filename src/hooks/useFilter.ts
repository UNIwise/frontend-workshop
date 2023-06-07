import React from "react";
import { DadJokeResponse } from "../api/jokes";

export const useFilter = (data: DadJokeResponse[]) => {
  const [filteredData, setFilteredData] =
    React.useState<DadJokeResponse[]>(data);

  const filterData = (filter: string) => {
    if (filter === "") {
      setFilteredData(data);
      return;
    }

    setFilteredData(
      data.filter((d) => {
        return d.joke.toLowerCase().includes(filter.toLowerCase());
      })
    );
  };

  React.useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return { filteredData, filterData };
};
