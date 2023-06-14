import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  beforeEach(() => {
    render(<Input />);
  });

  it("value should update with onChange", () => {
    const input: HTMLInputElement = screen.getByTestId("input-test-id");
    fireEvent.change(input, { target: { value: "hello everybody" } });

    expect(input.value).not.toBe('farewell everybody');
    expect(input.value).toBe('hello everybody');
  });
});
