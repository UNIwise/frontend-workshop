import React from "react";
import { Input } from "@mantine/core";
import { FaFilter } from "react-icons/fa";

interface JokeFilterProps {
  value: string;
  onChange: (filter: string) => void;
}

const JokeFilter: React.FC<JokeFilterProps> = (props) => {
  const { value, onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Input
      value={value}
      icon={<FaFilter />}
      placeholder={"filter jokes..."}
      onChange={handleChange}
    />
  );
};

export default JokeFilter;
