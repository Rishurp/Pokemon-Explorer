"use client";

import { useState } from "react";
import { trpc } from "../app/_trpc/client";
import PokedexTable from "./PokedexTable";

const Pokedex = () => {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data: pokemonArray, refetch } = trpc.getPokemonArray.useQuery(
    pokemonNames,
    {
      enabled: shouldFetch,
      onSuccess: () => setShouldFetch(false),
    }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShouldFetch(true);
    const namesArray = inputValue.split(",").map((name) => name.trim());
    setPokemonNames(namesArray);
    refetch();
  };

  return (
    <div>
      <p className="text-center text-2xl font-bold mt-4">Pokedex</p>
      <form className="text-center my-8 text-white" onSubmit={handleSubmit}>
        <label className="text-xl" htmlFor="pokemonNames">
          Enter Pokémon Names (comma-separated):{" "}
        </label>
        <input
          className="bg-slate-800 py-1 rounded-md px-2"
          id="pokemonNames"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="ml-2 px-4 py-1 bg-blue-600 rounded">
          Fetch Pokémon
        </button>
      </form>

      {pokemonArray && <PokedexTable pokemonArray={pokemonArray} />}
    </div>
  );
};

export default Pokedex;
