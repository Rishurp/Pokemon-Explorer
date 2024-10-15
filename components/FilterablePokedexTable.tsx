"use client";

import React, { useState } from "react";
import PokemonTypeSelection from "./PokemonTypeSelection";
import PokedexTable from "./PokedexTable";
import { trpc } from "@/app/_trpc/client";

const FilterablePokedexTable = () => {
  const [selectedType, setSelectedType] = useState("");

  const { data: pokemonArray, refetch } = trpc.getPokemonByType.useQuery(
    {
      type: selectedType,
    },
    {
      enabled: false,
    }
  );
  const handleSelectType = (type: string | undefined) => {
    if (type === undefined) {
      return;
    }
    setSelectedType(type);
    refetch();
  };

  return (
    <div>
      <PokemonTypeSelection
        selectType={handleSelectType}
        selectedType={selectedType}
      />
      {pokemonArray && <PokedexTable pokemonArray={pokemonArray} />}
    </div>
  );
};

export default FilterablePokedexTable;
