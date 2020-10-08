import React from "react";
import AllQuotes from "./AllQuotes";
import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <h2>Ron Swanson quote generator</h2>
      <hr></hr>
      <AllQuotes />
    </div>
  );
};

export default App;
