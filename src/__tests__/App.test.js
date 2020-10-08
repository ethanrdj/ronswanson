import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../components/App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Ron Swanson/i);
  expect(linkElement).toBeInTheDocument();
});
