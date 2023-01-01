import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePokemon, getAllPokemon } from "../../redux/features/pokemonSlice";

const PokemonCard = () => {
  const dispatch = useDispatch();
  const pokemonn = useSelector(getAllPokemon);
  return (
    <>
      <div className= "w-full py-8 flex items-center justify-center flex-wrap gap-8">
        {pokemonn?.map((poke: any, { id }: any) => (
          <div
            key={poke.id}
            className="w-[20%] h-[45%] p-4 flex flex-col justify-center items-center w-[full] gap-4 h-[100px] bg-gradient-to-r from-gray-100 to-#fcfcfc-200 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-gray-100 hover:bg-gray-100 cursor-pointer"
          >
            <Link key={id} to={`/${poke.id}`}>
              <img className="bg-gray-300 w-[8rem] rounded-full" src={poke?.sprites?.front_default} alt="" />
            </Link>

            <div className="flex items-center gap-[8rem]">
              <Link key={id} to={`/${poke.id}`}>
                <p className="text-xl font-semibold">{poke.name}</p>
              </Link>
              <i onClick={() => dispatch(deletePokemon(poke.id))}>
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
