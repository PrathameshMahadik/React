import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Task6 from "../modules/Day6/test/Task6";
import '@testing-library/jest-dom';

test("modal opens and closes correctly", async () => {
  render(<Task6 />);

  expect(screen.queryByText("Welcome to successive")).toBeNull();
  fireEvent.click(screen.getByText("Open modal"));
  await screen.findByText("Welcome to successive");
  expect(screen.getByText("Welcome to successive")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Close modal"));
  expect(screen.queryByText("Welcome to successive")).toBeNull();
});
