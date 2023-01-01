import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuid } from "uuid";

export const POKEMAN_URL = "https://pokeapi.co/api/v2/pokemon";
export const POKEMAN_URlL = "https://pokeapi.co/api/v2/pokemon/:id";
export interface PokemonState {
  pokemon: string[] | any;
  loading: boolean;
  errors: any[];
  selectPokemon: string[] | any;
}

interface State {
  pokemon: string[] | any;
  state: any[];
  selectPokemon: string[] | any;
}

const initialState: PokemonState = {
  pokemon: [],
  selectPokemon: [],
  loading: false,
  errors: [],
};



export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    //   addPokemon: (state, action) => {

    //   const result = action.payload;
    //   result.id = uuid();
    //   state.pokemon.push(result);
    // },
    addPokemon: (state, { payload }) => {
      state.pokemon = payload;
    },
    deletePokemon: (state) => {
      state.pokemon = []
     
    },
    // deletePokemon: (state, action) => {
    //   let { pokemon } = state;
    //   state.pokemon = pokemon.filter((item: any) => item.id !== action.payload.id);
    // },
  },
});

export default pokemonSlice.reducer;
export const getAllPokemon = (state: State) => state.pokemon.pokemon;
export const getSelectedPokemon = (state: State) => state.pokemon.selectPokemon
export const { addPokemon, deletePokemon } = pokemonSlice.actions;
