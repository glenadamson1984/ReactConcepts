import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // 👈 adds custom matchers
import { Counter } from "../Counter";
import { test, expect } from "vitest";

test("renders initial count", () => {
  render(<Counter />);

  // screen.getByText finds elements just like a user would
  expect(screen.getByText(/Count:/)).toBeInTheDocument();
  expect(screen.getByText("0")).toBeInTheDocument();
});

test("increments count when button clicked", () => {
  render(<Counter />);

  const button = screen.getByRole("button", { name: /increment/i });

  // simulate user click
  fireEvent.click(button);

  // assert the new count is shown
  expect(screen.getByText("1")).toBeInTheDocument();
});
