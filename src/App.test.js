import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./components/ContactForm";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("First Name input Field", () => {
  const { getByText } = render(<ContactForm />);

  const firstName = getByText(/firstName\*/i);

  expect(firstName).toBeInTheDocument();
});

// test("Max Length is equal to 3 characters", () => {
//   let expected = 3;
//   let actual = register({ maxLength });
//   expected(actual).toBe(expected);
// });
