import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";

test("should load contact us component", () => {
  render(<ContactUs />);

  const heading = screen.getByRole("heading");
  //Assertion
  expect(heading).toBeInTheDocument();
});

test("should load button inside component", () => {
  render(<ContactUs />);

  const button = screen.getByText("Submit");
  //Assertion
  expect(button).toBeInTheDocument();
});
