/** @format */

import Cards from "./components/cards/Cards";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleShow = () => setIsVisible(!isVisible);

  return (
    <div className='App'>
      <Navbar />
      <Cards isVisible={isVisible} toggleShow={toggleShow} />
    </div>
  );
}

export default App;
