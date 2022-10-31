import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Main1 from "./components/Main-1/Main";
import Main2 from "./components/Main-2/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainDiv">
        <Main1 />
        <Main2 />
      </div>
    </div>
  );
}

export default App;
