import React from "react";
import { TextField, Typography, Box } from "@mui/material";

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => {
  return (
    <Box maxWidth="md" mx="auto" px={2} mb={4}>
      <Typography
        variant="h4"
        color="textSecondary"
        fontWeight="bold"
        textAlign="center"
        mt={4}
      >
        Pokémon Explorer
      </Typography>

      <Typography
        variant="body1"
        color="primary"
        fontWeight="semibold"
        textAlign="center"
        mt={2}
      >
        Search for Pokémon by their type. For example, type{" "}
        <span className="font-bold">fire</span> to see the results.
      </Typography>

      <Box textAlign="center" mb={1}>
        <Typography variant="h6" component="label" htmlFor="pokemonType">
          Enter a <span style={{ fontWeight: "bold" }}>Pokémon Type</span> Here:
        </Typography>
      </Box>

      <TextField
        id="pokemonType"
        variant="outlined"
        fullWidth
        value={selectedType || ""}
        onChange={(e) => selectType(e.target.value)}
        sx={{ mb: 2 }}
      />
    </Box>
  );
};

export default PokemonTypeSelection;
