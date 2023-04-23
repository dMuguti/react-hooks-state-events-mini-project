import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";

test("displays the task text", () => {
  render(<Task text={"text!"} category={"category!"} />);
  expect(screen.queryByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  const sampleTask = { id: 1, text: "text!", category: "category!" };
  render(<Task task={sampleTask} />);
  expect(screen.getByText("category!", { selector: '.label' })).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);
  const task = screen.queryByText(/Buy rice/);
  const deleteButton = task.parentElement.querySelector("button");

  fireEvent.click(deleteButton);

  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});
