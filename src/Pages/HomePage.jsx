import React, { useContext } from 'react';
import Appbar from './shared/Appbar';
import { Box, Anchor } from 'grommet';
import { GameContext } from '../context/Game.context';
import { GAME_PATH } from '../assets/app.settings';

const HomePage = () => {
  const { setNewGame } = useContext(GameContext);
  return (
    <Box fill animation={['fadeIn', 'slideUp']}>
      <Appbar />
      <Box
        fill
        align="center"
        justify="center"
        animation={{
          type: 'fadeIn',
          delay: 1000,
        }}
      >
        <Anchor href={GAME_PATH}>Yahtz_i</Anchor>
      </Box>
    </Box>
  );
};

export default HomePage;
