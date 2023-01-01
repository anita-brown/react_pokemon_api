import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const SinglePokemon = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [newdata, setData]: any = useState([]);

  useEffect(() => {
    const fetch: any = async () => {
      try {
        const response: any = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const fetchApi = await response.data;
        setData(fetchApi);
      } catch (error) {
        console.log(error);
      }
    };
    setLoading(false);
    fetch();
  }, [setData, id]);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {!newdata ? (
            ""
          ) : (
            <div className="mt-8 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex flex-col justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <div className="flex justify-center">
                  <img className="w-[20rem] h-[30remmm]" src={newdata?.sprites?.front_default} alt="images" />
                  <img className="w-[20rem] h-[30remmm]" src={newdata?.sprites?.back_default} alt="images" />
                </div>
                <p className="font-bold text-3xl">{newdata.name}</p>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h1 className="font-semibold text-xl text-blue-800">Abilities:</h1>
                    {newdata?.abilities?.map((a: any, index: number) => (
                      <p key={index}> {a.ability.name}</p>
                    ))}
                  </div>
                  <div>
                    <h1 className="font-semibold text-xl text-red-600">Moves:</h1>
                    {newdata?.moves?.slice(0, 2).map((m: any, i: number) => (
                      <p key={i}>{m.move.name}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SinglePokemon;
