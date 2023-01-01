import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import SinglePokemon from "./components/singlepokemon/SinglePokemon";

const Routes = () => {
  return (
    <section className="bg-dimWhite h-screen px-8 py-8">
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SinglePokemon />} />
      </Switch>
      <Footer />
    </section>
  );
};

export default Routes;
