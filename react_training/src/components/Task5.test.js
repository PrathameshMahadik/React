import React from "react";
import { render, screen } from "@testing-library/react";
import Task5 from "../modules/Day6/test/Task5";
import '@testing-library/jest-dom';

test("renders user profile information correctly", () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  };

  render(<Task5 name={user.name} email={user.email} phone={user.phone} />);

  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("Email: john.doe@example.com")).toBeInTheDocument();
  expect(screen.getByText("Phone Number: 123-456-7890")).toBeInTheDocument();
});