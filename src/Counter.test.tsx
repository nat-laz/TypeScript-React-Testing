import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

//state hooks testing

test("handles onCLick", () => {
  render(<Counter />);
  const divElement = screen.getByRole("contentinfo");
  const buttonElement = screen.getByText("Add One");

  fireEvent.click(buttonElement);

  expect(divElement).toHaveTextContent("Count is 1");
});
