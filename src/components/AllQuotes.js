import React, { useState } from "react";
import axios from "axios";
import QuoteCard from "./QuoteCard";

const AllQuotes = () => {
  const [quote, setQuote] = useState();
  const [searchValue, setSearchValue] = useState();
  const [searchQuote, setSearchQuote] = useState();
  const [error, setError] = useState();

  const handleRandomQuote = () => {
    axios
      .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(({ data }) => setQuote(data))

      .catch((err) => console.log(err));
  };

  const handleSearchQuote = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/${searchValue}`
      )
      .then(({ data }) => {
        if (data.length === 0) {
          setError("No quotes, please try something different");
        } else {
          setSearchQuote(data);
          setError();
        }
      });
  };

  return (
    <div className="AllQuotes">
      <QuoteCard
        quote={quote}
        setQuote={setQuote}
        handleRandomQuote={handleRandomQuote}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchQuote={searchQuote}
        setSearchQuote={setSearchQuote}
        handleSearchQuote={handleSearchQuote}
        error={error}
      />
    </div>
  );
};

export default AllQuotes;
