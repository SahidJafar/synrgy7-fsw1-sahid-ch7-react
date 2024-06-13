import logo from "./logo.svg";
import "./App.css";
import InputComponent from "./components/input";
import ResultComponent from "./components/result";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [menu, setMenu] = useState(["Menu 1", "Menu 2", "Menu 3"]);
  const [newMenuItem, setNewMenuItem] = useState("");
  // const Menu = ["Menu 1", "Menu 2", "Menu 3"];

  const addMenuItem = () => {
    setMenu([...menu, newMenuItem]);
    setNewMenuItem(""); // Reset input field after adding
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <InputComponent setResult={setResult} result={result} newMenuItem={newMenuItem} setNewMenuItem={setNewMenuItem} addMenuItem={addMenuItem} />
        <ResultComponent result={result} menu={menu} />
      </header>
    </div>
  );
}

export default App;
