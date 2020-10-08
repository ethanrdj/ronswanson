import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import QuoteCard from "../components/QuoteCard";

describe("QuoteCard", () => {
  it("renders the correct component", () => {
    const { asFragment } = render(<QuoteCard quote="This is the quote" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
