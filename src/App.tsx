import React from "react";
import PokemonCard from "./components/card/PokemonCard";
import PokemonForm from "./components/form/PokemonForm";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="bg-dimWhite h-screen px-8 py-8">
      <Header />
      {/* <PokemonForm /> */}
      <PokemonCard/>

    </div>
  );
}

export default App;
