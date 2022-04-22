import React from "react";
import MainContent from "./components/MainContent";
import babyNamesData from "./components/data/babyNamesData.json";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <MainContent placeholder="Enter a Name" babyNames={babyNamesData} />
    </div>
  );
};

export default App;
