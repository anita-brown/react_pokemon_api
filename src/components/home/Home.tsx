import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPokemon, POKEMAN_URL } from "../../redux/features/pokemonSlice";
import PokemonCard from "../card/PokemonCard";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(POKEMAN_URL);
        const fetchApi = response.data.results;
        const result = await Promise.all(
          fetchApi.map(async (api: any) => {
            const responseUrl = await axios.get(api.url);
            return responseUrl.data;
          })
        );
        console.log("res", result);

        dispatch(addPokemon(result));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return <div>{loading ? <h1>Loading...</h1> : <PokemonCard />}</div>;
};

export default Home;
