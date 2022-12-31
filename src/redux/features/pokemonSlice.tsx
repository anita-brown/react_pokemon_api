import React from 'react'
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface ExpenseState {
  pokemon: string[] | any;
}
const initialState: ExpenseState = {
  pokemon: [],
};
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const result = action.payload;
      result.id = uuid();
      state.pokemon.push(result);
    },
    deletePokemon: (state, action) => {
      let { pokemon } = state;
      state.pokemon = pokemon.filter((item: any) => item.id !== action.payload.id);
    },
  },
});

export default pokemonSlice.reducer

export const { addPokemon, deletePokemon } = pokemonSlice.actions;



