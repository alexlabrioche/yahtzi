import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';

const HiScoreTable = ({ scores }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            <strong>Joueur</strong>
          </TableCell>
          <TableCell scope="col" border="bottom">
            <strong>Score</strong>
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {scores.map(({ name, score, id }) => (
          <TableRow key={id}>
            <TableCell scope="row">{name}</TableCell>
            <TableCell>{score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HiScoreTable;
