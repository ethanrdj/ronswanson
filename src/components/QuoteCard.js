import React from "react";

import "../styles/QuoteCard.css";
import ron from "../Ron Swanson.svg";

const QuoteCard = ({
  quote,
  setQuote,
  handleRandomQuote,
  searchValue,
  setSearchValue,
  searchQuote,
  handleSearchQuote,
  error,
  setSearchQuote,
}) => {
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const quoteFunc = () => {
    const quotes = searchQuote.map((quote) => <li>{quote}</li>);
    return quotes;
  };

  return (
    <div className="QuoteCard">
      <h4>Click Ron to get a random quote</h4>
      <img
        className="quote-buttons"
        src={ron}
        alt="ron"
        onClick={() => handleRandomQuote()}
      ></img>
      {quote && (
        <button className="clear-button" onClick={() => setQuote()}>
          X
        </button>
      )}
      <p>{quote}</p>

      <hr></hr>

      <h4>Search for a quote by keyword i.e. bacon</h4>
      <form onSubmit={handleSearchQuote}>
        <input
          type="text"
          className="search-input"
          onChange={handleChange}
          value={searchValue}
        ></input>
        <button>Search</button>
      </form>
      {searchQuote && (
        <button
          onClick={() => {
            setSearchQuote();
            setSearchValue("");
          }}
        >
          clear
        </button>
      )}
      {searchQuote && <ul>{quoteFunc()}</ul>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default QuoteCard;
