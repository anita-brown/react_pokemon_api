import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPokemon } from "../../redux/features/pokemonSlice";
import { v4 as uuid } from "uuid";

const PokemonForm = ({ setShowModal }: any) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    image: "",
    id: uuid(),
  });

  const handleAddPokemon = (e: any) => {
    const { name, value }: string | any = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, image } = values;
    if (name === "" || image === "") {
      setValues({ ...values });
      return;
    }
    dispatch(addNewPokemon(values));
    setShowModal(false)
    
    setValues({
      name: "",
      image: "",
      id: uuid(),
    });
  };

  return (
    <div className="flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none bg-gray-500 bg-opacity-75 transition-opacity">
      <div className="relative w-auto my-6 mx-auto w-[30rem] ">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t "></div>

          <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 w-full">
            <label className="block text-black text-sm font-bold mb-1">Pokemon Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 text-black" type="text" name="name" onChange={handleAddPokemon} value={values.name} required />
            <label className="block text-black text-sm font-bold mb-1">Image</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 text-black" name="image" type="file" src="" alt="" onChange={handleAddPokemon} value={values.image} required />

            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Close
              </button>
              <button className="text-white bg-orange-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="submit">
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PokemonForm;
