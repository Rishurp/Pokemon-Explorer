"use client";

import { useState } from "react";
import { trpc } from "../app/_trpc/client";
import PokemonRow from "./PokemonRow";
import {
  Typography,
  TextField,
  Button,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";

const Pokemon = () => {
  const [pokemonName, setName] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  const {
    data: pokemonDetails,
    refetch,
    isFetching,
    isInitialLoading,
    isLoading,
  } = trpc.getPokemonDetails.useQuery(
    { name: pokemonName },
    {
      enabled: shouldFetch,
      onSuccess: () => setShouldFetch(false),
    }
  );

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value.trim());
  };

  const getDetails = (event: React.FormEvent) => {
    event.preventDefault();
    setShouldFetch(true);

    refetch();
  };

  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={4}>
        <Typography variant="h4" color="textSecondary" fontWeight="bold">
          Pokémon Explorer
        </Typography>
        <Typography variant="h6" color="primary" fontWeight="semibold" mt={2}>
          Find detailed information about your favorite Pokémon. For example,
          type <span className="font-bold">Pikachu</span> to see its details.
        </Typography>
      </Box>

      <form onSubmit={getDetails}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          my={4}
        >
          <TextField
            id="pokemonName"
            label="Type a Pokémon Name Here"
            variant="outlined"
            value={pokemonName}
            onChange={handleName}
            sx={{ flex: 1, mr: { md: 2 }, mb: { xs: 2, md: 0 } }}
          />
          <Button type="submit" variant="contained" color="primary">
            Get Pokémon
          </Button>
        </Box>
      </form>

      {(isFetching || isInitialLoading) && (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      )}

      {pokemonDetails ? (
        <Box px={2}>
          <PokemonRow pokemonDetail={pokemonDetails} />
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

export default Pokemon;
