import React from "react";

const Input: React.FC = () => {
  const [value, setValue] = React.useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      data-testid={"input-test-id"}
      value={value}
      onChange={onChange}
      placeholder={"placeholder..."}
    />
  );
};

export default Input;
