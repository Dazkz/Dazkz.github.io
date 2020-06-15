import React, { useState } from "react";
import "./App.css";
import Api from "../../Api/Api";
import { Places } from "../Places/Places";
import { InputPanel } from "../InputPanel/InputPanel";

function App() {
  const [data, setData] = useState([]);
  const submitInput = (keyword, location, sortBy) => {
    if (!!keyword & !!location === true) {
    Api.getPlaces(keyword, location, sortBy).then((places) => {
      setData(places);
    });
  }
  };
  return (
    <section className="App">
      <header className="App__header">CRINGE</header>
      <InputPanel submitInput={submitInput}></InputPanel>
      <Places data={data}></Places>
      <footer className="App__footer"></footer>
    </section>
  );
}

export default App;
