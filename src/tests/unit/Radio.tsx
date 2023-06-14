import React from "react";

const Radio: React.FC = () => {
  const [value, setValue] = React.useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        data-testid="radio-1"
        value="radio1"
        onChange={onChange}
        checked={value === "radio1"}
      />
      <input
        type="radio"
        data-testid="radio-2"
        value="radio2"
        onChange={onChange}
        checked={value === "radio2"}
      />
      <input
        type="radio"
        data-testid="radio-3"
        value="radio3"
        onChange={onChange}
        checked={value === "radio3"}
      />
    </div>
  );
}

export default Radio;
