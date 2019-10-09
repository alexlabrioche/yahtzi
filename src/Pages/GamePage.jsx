import React from 'react';
import Appbar from './shared/Appbar';
import Yahtzee from '../components/Yahtzee';
import { Box } from 'grommet';

const GamePage = () => {
  return (
    <Box fill animation={['fadeIn', 'slideDown']}>
      <Appbar />
      <Box fill align="center" justify="center">
        <Yahtzee />
      </Box>
    </Box>
  );
};

export default GamePage;
