import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import QuoteCard from "../components/QuoteCard";

describe("QuoteCard", () => {
  const quotes = {
    quote: "This is the quote",
  };

  it("renders the correct component", () => {
    const { asFragment } = render(<QuoteCard quote={quotes} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
