import React from "react";

import BemVindo from "./components/PrimeiroComp";

import Button from "./components/Button";

import "./App.css";

import Idade from "./components/Idade";



const App = () => {
  return (
    <div className="App">
      <BemVindo />
      <BemVindo />
      <BemVindo />
      <Button />
      <Idade />
       
    </div>
  );

}

export default App;