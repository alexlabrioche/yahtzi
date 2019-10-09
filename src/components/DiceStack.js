import React from 'react';
import Dice from './Dice';
import { Box } from 'grommet';
const DiceStack = ({ dice, handleClick, locked }) => {
  return (
    <Box align="center" justify="between" fill="horizontal" direction="row" pad="large">
      {dice.map((d, idx) => (
        <Dice handleClick={handleClick} val={d} locked={locked[idx]} idx={idx} key={idx} />
      ))}
    </Box>
  );
};

export default DiceStack;
