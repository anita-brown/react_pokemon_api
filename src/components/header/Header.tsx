import React, { useState } from "react";
import PokemonForm from "../form/PokemonForm";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex justify-between mb-8">
        <h1 className="text-orange-700 text-2xl font-bold">Pokemon App</h1>
        <button onClick={() => setShowModal(true)} type="button" className="bg-primary text-white rounded-md px-4 py-2">
          Add Pokemon
        </button>
      </div>
      {showModal && <PokemonForm setShowModal={setShowModal} />}
    </>
  );
};

export default Header;
