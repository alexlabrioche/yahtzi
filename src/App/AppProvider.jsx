import React from 'react';
import GameProvider from '../context/Game.context';
import { Grommet, grommet } from 'grommet';
import { HOME_PATH, GAME_PATH } from '../assets/app.settings';
import { HomePage, GamePage } from '../Pages';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppProvider = () => {
  return (
    <GameProvider>
      <Grommet theme={grommet} full>
        <Router>
          <Route exact path={HOME_PATH} component={HomePage} />
          <Route exact path={GAME_PATH} component={GamePage} />
        </Router>
      </Grommet>
    </GameProvider>
  );
};

export default AppProvider;
