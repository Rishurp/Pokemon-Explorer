import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type PokemonArray = {
  id: number;
  name: string;
  types: string[];  
  sprite: string;
}[];

const PokedexTable = ({ pokemonArray }: { pokemonArray: PokemonArray }) => {
  return (
    <TableContainer component={Paper} className="mt-6">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="font-bold">ID</TableCell>
            <TableCell className="font-bold">Name</TableCell>
            <TableCell className="font-bold">Types</TableCell>
            <TableCell className="font-bold">Sprite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemonArray.map((pokemon) => (
            <TableRow key={pokemon.id}>
              <TableCell>{pokemon.id}</TableCell>
              <TableCell>{pokemon.name}</TableCell>
              <TableCell>{pokemon.types.join(", ")}</TableCell>
              <TableCell>{pokemon.sprite}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PokedexTable;
