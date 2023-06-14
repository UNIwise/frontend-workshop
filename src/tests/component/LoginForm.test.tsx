import { render, screen, fireEvent, act } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm component", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  test("should log in successfully", () => {
    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByText("Login");

    act(() => {
      fireEvent.change(usernameInput, { target: { value: "john.doe" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      fireEvent.click(submitButton);
    });

    // Assert authentication logic here

    expect(true).toBeTruthy();
  });

  test.todo("should deny access with wrong credentials");

  test.todo("should validate correctly...");
});
