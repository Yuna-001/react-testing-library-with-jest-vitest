import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";
import { kebabCaseToTitleCase } from "./helpers";

test("button click flow", () => {
  render(<App />);

  const buttonElement = screen.getByRole("button", { name: /blue/i });

  expect(buttonElement).toHaveClass("medium-violet-red");

  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveTextContent(/red/i);

  expect(buttonElement).toHaveClass("midnight-blue");
});

test("checkbox flow", () => {
  render(<App />);

  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toHaveClass("medium-violet-red");

  fireEvent.click(checkboxElement);

  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toHaveClass("gray");

  fireEvent.click(checkboxElement);

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toHaveClass("medium-violet-red");
});

test("checkbox fllow after button click", () => {
  render(<App />);

  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  fireEvent.click(buttonElement);

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toHaveClass("midnight-blue");

  fireEvent.click(checkboxElement);

  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toHaveClass("gray");

  fireEvent.click(checkboxElement);

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toHaveClass("midnight-blue");
});

describe("kebabCaseToTitleCase", () => {
  test("works for no hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("works for one hyphen", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});
