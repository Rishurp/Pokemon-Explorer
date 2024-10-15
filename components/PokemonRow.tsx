import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type PokemonDetail = {
  name: string;
  id: number;
  types: string[];
  sprite: string;
};

const PokemonRow = ({ pokemonDetail }: { pokemonDetail: PokemonDetail }) => {
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
          <TableRow>
            <TableCell>{pokemonDetail.id}</TableCell>
            <TableCell>{pokemonDetail.name}</TableCell>
            <TableCell>{pokemonDetail.types.join(", ")}</TableCell>
            <TableCell>{pokemonDetail.sprite}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PokemonRow;
