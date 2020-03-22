import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

// test("Max Length is equal to 3 characters", () => {
//   let expected = 3;
//   let actual = register({ maxLength });
//   expected(actual).toBe(expected);
// });
