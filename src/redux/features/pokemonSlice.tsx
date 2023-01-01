import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const POKEMAN_URL = "https://pokeapi.co/api/v2/pokemon";

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
    addNewPokemon: (state, action) => {
      const result = action.payload;
      result.id = uuid();
      state.pokemon.unshift(result);
    },
    addPokemon: (state, { payload }) => {
      state.pokemon = payload;
    },
    deletePokemon: (state, action) => {
      state.pokemon = state.pokemon.filter((item: any) => item.id !== action.payload);
    },
  },
});

export default pokemonSlice.reducer;
export const getAllPokemon = (state: State) => state.pokemon.pokemon;
export const getSelectedPokemon = (state: State) => state.pokemon.selectPokemon;
export const { addPokemon, addNewPokemon, deletePokemon } = pokemonSlice.actions;
