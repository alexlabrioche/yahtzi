import React from 'react';
import AnimateInteger from '../animated/AnimateInteger';
import RuleRow from './RuleRow';
import { Table, TableBody, TableHeader, TableRow, TableCell } from 'grommet';
import {
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
} from './Rules';

const LowerScore = ({ scores, doScore, result }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            <strong>Section Inférieur</strong>
          </TableCell>
          <TableCell scope="col" border="bottom" align="right">
            points
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <RuleRow
          name="Brelan"
          desc={threeOfKind.desc}
          score={scores.threeOfKind}
          doScore={(evt) => doScore('threeOfKind', threeOfKind.evalRoll)}
        />
        <RuleRow
          name="Carré"
          desc={fourOfKind.desc}
          score={scores.fourOfKind}
          doScore={(evt) => doScore('fourOfKind', fourOfKind.evalRoll)}
        />
        <RuleRow
          name="Full"
          desc={fullHouse.desc}
          score={scores.fullHouse}
          doScore={(evt) => doScore('fullHouse', fullHouse.evalRoll)}
        />
        <RuleRow
          name="Petite suite"
          desc={smallStraight.desc}
          score={scores.smallStraight}
          doScore={(evt) => doScore('smallStraight', smallStraight.evalRoll)}
        />
        <RuleRow
          name="Grande suite"
          desc={largeStraight.desc}
          score={scores.largeStraight}
          doScore={(evt) => doScore('largeStraight', largeStraight.evalRoll)}
        />
        <RuleRow
          name="Yahtzee!"
          desc={yahtzee.desc}
          score={scores.yahtzee}
          doScore={(evt) => doScore('yahtzee', yahtzee.evalRoll)}
        />
        <RuleRow
          name="Chance"
          desc={chance.desc}
          score={scores.chance}
          doScore={(evt) => doScore('chance', chance.evalRoll)}
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
export default LowerScore;
