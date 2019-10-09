import React from 'react';
import AnimateInteger from '../animated/AnimateInteger';
import RuleRow from './RuleRow';
import { Table, TableBody, TableHeader, TableRow, TableCell } from 'grommet';
import { ones, twos, threes, fours, fives, sixes } from './Rules';

const UpperScore = ({ scores, doScore, result }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            <strong>Section Supérieur</strong>
          </TableCell>
          <TableCell scope="col" border="bottom" align="right">
            points
          </TableCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        <RuleRow
          name="Un"
          desc={ones.desc}
          score={scores.ones}
          doScore={(evt) => doScore('ones', ones.evalRoll)}
        />
        <RuleRow
          name="Deux"
          desc={twos.desc}
          score={scores.twos}
          doScore={(evt) => doScore('twos', twos.evalRoll)}
        />
        <RuleRow
          name="Trois"
          desc={threes.desc}
          score={scores.threes}
          doScore={(evt) => doScore('threes', threes.evalRoll)}
        />
        <RuleRow
          name="Quatre"
          desc={fours.desc}
          score={scores.fours}
          doScore={(evt) => doScore('fours', fours.evalRoll)}
        />
        <RuleRow
          name="Cinq"
          desc={fives.desc}
          score={scores.fives}
          doScore={(evt) => doScore('fives', fives.evalRoll)}
        />
        <RuleRow
          name="Six"
          desc={sixes.desc}
          score={scores.sixes}
          doScore={(evt) => doScore('sixes', sixes.evalRoll)}
        />
        <TableRow>
          <TableCell scope="col" border="top">
            <strong>total :</strong>
          </TableCell>
          <TableCell scope="col" border="top" align="right">
            <strong>
              <AnimateInteger value={result} />
            </strong>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
export default UpperScore;
