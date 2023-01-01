import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePokemon, getAllPokemon } from "../../redux/features/pokemonSlice";
import SinglePokemon from "../singlepokemon/SinglePokemon";

const PokemonCard = () => {
  const dispatch = useDispatch();
  const [showPokemon, setShowPokemon] = useState(false);
  const pokemonn = useSelector(getAllPokemon);
  const [pokemon, setPokemon] = useState(pokemonn);
  console.log("kkk", pokemonn);
  return (
    <>
      <div className="flex flex-wrap gap-8">
        {pokemon?.map((poke: any, { id }: any) => (
          <div
            key={poke.id}
            className="w-[20rem] h-[15rem] mt-4 flex flex-col justify-center items-center w-[full] gap-4 h-[100px] p-6 bg-gradient-to-r from-gray-100 to-#fcfcfc-200 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-gray-100 hover:bg-gray-100 cursor-pointer"
          >
            <Link key={id} to={`/${poke.id}`}>
              <img className="bg-gray-300 w-[10rem] h-[10rem] rounded-full" src={poke.sprites.front_default} alt="" />
            </Link>

            <p>{id}</p>
            <div className="flex items-center gap-[8rem]">
              <Link key={id} to={`/${poke.id}`}>
                <p className="text-xl font-semibold">{poke.name}</p>
              </Link>
              <i onClick={() => dispatch(deletePokemon())}>
                <MdDelete color="red" size={20} />
              </i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonCard;
