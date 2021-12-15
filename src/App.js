import React from "react";
import Card from "./components/card/Card";
import Data from "./components/card/Data";
import "./App.css";
function App() {
  return (
    <div className="App">
      <img
        src="/static/media/react.7b78f5c3.svg"
        alt="logo"
        id="logo"
      ></img>
      <h2>Languages</h2>
      <div className="container">
        {Data.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </div>
    </div>
  );
}
export default App;