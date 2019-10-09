import React, { createContext, useState, useMemo } from 'react';
import { NUM_DICE, NUM_ROLLS } from '../assets/game.settings';

function getGameProps() {
  return {
    dice: Array.from({ length: NUM_DICE }),
    locked: Array(NUM_DICE).fill(false),
    rollsLeft: NUM_ROLLS,
    scores: {
      ones: undefined,
      twos: undefined,
      threes: undefined,
      fours: undefined,
      fives: undefined,
      sixes: undefined,
      threeOfKind: undefined,
      fourOfKind: undefined,
      fullHouse: undefined,
      smallStraight: undefined,
      largeStraight: undefined,
      yahtzee: undefined,
      chance: undefined,
    },
    totals: {
      upper: undefined,
      lower: undefined,
      total: undefined,
    },
  };
}

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameProps, setGameProps] = useState(getGameProps);
  const [gameEnds, setGameEnds] = useState(false);
  const { scores } = gameProps;
  console.info('__gameProps', gameProps);
  useMemo(() => {
    if (!Object.values(scores).includes(undefined)) {
      setGameEnds(true);
    }
  }, [scores]);
  useMemo(() => {
    console.info('useMemo triggered');
    function upperScores(s) {
      return [
        s.ones || 0,
        s.twos || 0,
        s.threes || 0,
        s.fours || 0,
        s.fives || 0,
        s.sixes || 0,
      ].reduce((a, b) => a + b);
    }
    function lowerScores(s) {
      return [
        s.threeOfKind || 0,
        s.fourOfKind || 0,
        s.fullHouse || 0,
        s.smallStraight || 0,
        s.largeStraight || 0,
        s.yahtzee || 0,
        s.chance || 0,
      ].reduce((a, b) => a + b);
    }
    function grandTotal(s) {
      return lowerScores(s) + upperScores(s);
    }
    setGameProps((state) => ({
      ...state,
      totals: { upper: upperScores(scores), lower: lowerScores(scores), total: grandTotal(scores) },
    }));
  }, [scores]);
  return (
    <GameContext.Provider value={{ gameProps, setGameProps, gameEnds, setGameEnds }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider as default, GameContext };
