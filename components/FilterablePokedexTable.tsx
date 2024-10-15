"use client";

import React, { useEffect, useState } from "react";
import PokemonTypeSelection from "./PokemonTypeSelection";
import PokedexTable from "./PokedexTable";
import { trpc } from "@/app/_trpc/client";
import { Box, CircularProgress } from "@mui/material";

const FilterablePokedexTable = () => {
  const [selectedType, setSelectedType] = useState("");

  const {
    data: pokemonArray,
    refetch,
    isFetching,
    isInitialLoading,
  } = trpc.getPokemonByType.useQuery(
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
    const input = type.trim().toLowerCase();
    setSelectedType(input);
  };

  useEffect(() => {
    refetch();
  }, [selectedType, refetch]);

  return (
    <Box p={2}>
      <PokemonTypeSelection
        selectType={handleSelectType}
        selectedType={selectedType}
      />

      {(isFetching || isInitialLoading) && (
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress />
        </Box>
      )}
      {pokemonArray && (
        <Box mt={2}>
          <PokedexTable pokemonArray={pokemonArray} />
        </Box>
      )}
    </Box>
  );
};

export default FilterablePokedexTable;
