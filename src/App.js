import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import SickoMode from "./components/SickoMode";
// import { ReactComponent } from "*.svg";

let name = 'Music';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <p>powered by spotify</p>
        <SickoMode />
        {/* <Album />
        <Album />
        <Album />
        <Album /> */}
      </header>
    </div>
  );
}

export default App;
