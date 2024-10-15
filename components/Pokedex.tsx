"use client";

import { useState } from "react";
import { trpc } from "../app/_trpc/client";
import PokedexTable from "./PokedexTable";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";

const Pokedex = () => {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  const {
    data: pokemonArray,
    refetch,
    isFetching,
    isInitialLoading,
    isLoading,
  } = trpc.getPokemonArray.useQuery(pokemonNames, {
    enabled: shouldFetch,
    onSuccess: () => setShouldFetch(false),
  });

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
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" color="textSecondary" fontWeight="bold">
        Pokémon Explorer
      </Typography>

      <Typography variant="h6" color="primary" fontWeight="semibold" mt={2}>
        Discover detailed information about multiple Pokémon. For instance, you
        can type <span className="font-bold">Pikachu, Bulbasaur</span> to view
        their details.
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          my={4}
        >
          <TextField
            id="pokemonNames"
            label="Enter Pokémon Names (comma-separated)"
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
            sx={{ flex: 1, mr: { md: 2 }, mb: { xs: 2, md: 0 } }}
          />
          <Button type="submit" variant="contained" color="primary">
            Get Pokémon
          </Button>
        </Box>
      </form>

      {(isFetching || isInitialLoading) && (
        <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
          <CircularProgress />
        </Box>
      )}

      {pokemonArray && pokemonArray.length > 0 ? (
        <Box px={2}>
          <PokedexTable pokemonArray={pokemonArray} />
        </Box>
      ) : (
        !isInitialLoading &&
        !isLoading && (
          <Box px={2} textAlign="center" mt={4}>
            <Typography variant="h6" color="error">
              No Pokémon Found
            </Typography>
          </Box>
        )
      )}
    </Container>
  );
};

export default Pokedex;
