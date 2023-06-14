import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import TodoList from "./TodoList";

describe('TodoList component', () => {
  beforeEach(() => {
    render(<TodoList />);

    // Add todos
    const todoInput = screen.getByTestId("input-add-todo");
    const addButton = screen.getByTestId("button-add-todo");

    fireEvent.change(todoInput, { target: { value: "Todo 1" } });
    fireEvent.click(addButton);
    fireEvent.change(todoInput, { target: { value: "Todo 2" } });
    fireEvent.click(addButton);
  });

  afterEach(() => cleanup());

  test("complete todo", () => {
    const { getByTestId, getByText } = screen;

    // Check if todos are rendered
    expect(getByText("Todo 1")).toBeInTheDocument();
    expect(getByText("Todo 2")).toBeInTheDocument();

    // Complete todo
    const completeButton = getByTestId("complete-todo-0");
    fireEvent.click(completeButton);

    // Check if completed todo is marked with a checkmark
    expect(getByText("✅ Todo 1")).toBeInTheDocument();
  });

  test("delete todo", () => {
    const { getByTestId, queryByText } = screen;

    // Delete todo
    const deleteButton = getByTestId("delete-todo-0");
    fireEvent.click(deleteButton);

    // Check if deleted todo is removed
    expect(queryByText("Todo 1")).toBeNull();
  });
});
