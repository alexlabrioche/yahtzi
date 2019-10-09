import React from 'react';
import { Table, TableBody, TableCell, TableRow } from 'grommet';
import AnimateInteger from '../animated/AnimateInteger';

const ResultScores = ({ lower, upper, total }) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell scope="col" border="bottom">
            <strong>Section Supérieur</strong>
          </TableCell>
          <TableCell scope="col" border="bottom" align="right">
            <AnimateInteger value={upper} /> {`point${upper > 0 ? 's' : ''}`}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="col" border="bottom">
            <strong>Section Inférieur</strong>
          </TableCell>
          <TableCell scope="col" border="bottom" align="right">
            <AnimateInteger value={lower} /> {`point${lower > 0 ? 's' : ''}`}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="col" border="bottom">
            <strong>TOTAL</strong>
          </TableCell>
          <TableCell scope="col" border="bottom" align="right">
            <AnimateInteger value={total} /> {`point${total > 0 ? 's' : ''}`}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ResultScores;
