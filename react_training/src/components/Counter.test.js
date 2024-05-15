import React from "react";
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from "@testing-library/react";
import Task3 from "../modules/Day6/test/Task3";

test("Task3 increments and decrements correctly", () => {
  render(<Task3 />);

  const counterValue = screen.getByText(/Counter:/i);
  expect(counterValue).toHaveTextContent("Counter: 0");

  const incrementButton = screen.getByText("Increment");
  expect(incrementButton).toBeInTheDocument();
  
  const decrementButton = screen.getByText("Decrement");
  expect(decrementButton).toBeInTheDocument();

  fireEvent.click(incrementButton);
  expect(counterValue).toHaveTextContent("Counter: 1");

  fireEvent.click(decrementButton);
  expect(counterValue).toHaveTextContent("Counter: 0");
});
