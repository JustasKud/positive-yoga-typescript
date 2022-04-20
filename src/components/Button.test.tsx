import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

it("should render a button", () => {
  render(<Button text="Placeholder Text" isDesktop />);
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeInTheDocument();
});

it("should have the same text as props", () => {
  render(<Button text="Placeholder Text" isDesktop />);
  const linkElement = screen.getByRole("button");
  expect(linkElement.textContent).toBe("Placeholder Text");
});
