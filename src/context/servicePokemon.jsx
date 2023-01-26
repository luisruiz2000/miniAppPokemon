import { createContext, useState } from "react";

import axios from "axios";
import React from "react";

export const pokemonContext = createContext();

const StateCompo = ({ children }) => {
  const [search, setSearch] = useState([]);

  const getPokemon = async (pokemon) => {
    try {
      let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const dataPokemon = await axios(urlPokemon);
      const data = dataPokemon.data;

      const infoPokemon = {
        name: data.name,
        img: data.sprites.other.dream_world.front_default,
        type: data.types.map((t) => t.type.name).join(""),
        height: data.height,
        weight: data.weight,
        base_experience: data.base_experience,
        abilities: data.abilities.map((a) => a.ability.name).join(""),
      };

      if (infoPokemon.name) {
        console.log(pokemon);
      }

      setSearch(infoPokemon);

      return infoPokemon;
    } catch (error) {
      console.log({ msg: "Pokemon No encontrado" });
      alert("El Pokemon buscado no existe");
    }
  };

  return (
    <pokemonContext.Provider
      value={{
        search,
        getPokemon,
      }}
    >
      {children}
    </pokemonContext.Provider>
  );
};

export default StateCompo;
