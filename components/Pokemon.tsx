"use client";

import { useState } from "react";
import { trpc } from "../app/_trpc/client";
import PokemonRow from "./PokemonRow";

const Pokemon = () => {
  const [pokemonName, setName] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data: pokemonDetails, refetch } = trpc.getPokemonDetails.useQuery(
    { name: pokemonName },
    {
      enabled: shouldFetch, 
      onSuccess: () => setShouldFetch(false), 
    }
  );

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const getDetails = (event: React.FormEvent) => {
    event.preventDefault(); 
    setShouldFetch(true); 
    refetch(); 
  };

  return (
    <div>
      <p className="text-center text-2xl font-bold mt-4">Pokemon Dictionary</p>

      <form className="text-center my-8 text-white" onSubmit={getDetails}>
        <label className="text-xl" htmlFor="pokemonName">
          Type a Pokemon Name Here:{" "}
        </label>
        <input
          className="bg-slate-800 py-1 rounded-md px-2"
          id="pokemonName"
          type="text"
          value={pokemonName}
          onChange={handleName}
        />
        <button type="submit" className="ml-2 px-4 py-1 bg-blue-600 rounded">
          Get Details
        </button>
      </form>

      {pokemonDetails && <PokemonRow pokemonDetail={pokemonDetails}/>}
    </div>
  );
};

export default Pokemon;
