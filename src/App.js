import React from "react";
import SearchBar from "./components/data/SearchBar";
import babyNamesData from "./components/data/babyNamesData.json";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <SearchBar placeholder="Enter a Name" data={babyNamesData} />
    </div>
  );
};

export default App;
