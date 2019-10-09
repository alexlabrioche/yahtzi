import React, { useContext } from 'react';
import { Box, Text } from 'grommet';
import { GameContext } from '../../context/Game.context';
import ResultScores from './ResultScores';
import HiScores from './HiScores';

const EndScoreTable = ({}) => {
  const { gameProps } = useContext(GameContext);
  return (
    <Box fill>
      <HiScores />
    </Box>
  );
};

export default EndScoreTable;
