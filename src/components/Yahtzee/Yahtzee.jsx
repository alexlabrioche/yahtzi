import React, { useContext, useEffect, useState } from 'react';
import { Box, Button } from 'grommet';
import { GameContext } from '../../context/Game.context';
import { NUM_DICE, NUM_ROLLS } from '../../assets/game.settings';
import ScoreTable from '../ScoreTable';
import EndScoreTable from '../ScoreTable/EndScoreTable';
import DiceStack from '../DiceStack';

const Yahtzee = () => {
  const { gameProps, setGameProps, gameEnds } = useContext(GameContext);
  const { rollsLeft, locked, dice } = gameProps;
  function roll(evt) {
    setGameProps((state) => ({
      ...state,
      dice: state.dice.map((d, i) => (state.locked[i] ? d : Math.ceil(Math.random() * 6))),
      locked: state.rollsLeft > 1 ? state.locked : Array(NUM_DICE).fill(true),
      rollsLeft: state.rollsLeft - 1,
    }));
  }
  function toggleLocked(idx) {
    if (rollsLeft > 0) {
      setGameProps((state) => ({
        ...state,
        locked: [...state.locked.slice(0, idx), !state.locked[idx], ...state.locked.slice(idx + 1)],
      }));
    }
  }
  function doScore(rulename, ruleFn) {
    setGameProps((state) => ({
      ...state,
      scores: { ...state.scores, [rulename]: ruleFn(dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
      dice: Array.from({ length: NUM_DICE }),
    }));
  }
  function throwDice() {
    alert("lance les dés avant d'écrire ton score");
  }
  function displayRollInfo() {
    const msg = ['inscris ton score...', 'Dernière chance', 'Encore 2 lancés !', "C'est parti :)"];
    return msg[rollsLeft];
  }
  return (
    <Box fill align="center" pad="medium">
      <Box
        fill="horizontal"
        pad="medium"
        background="brand"
        elevation="large"
        round="small"
        animation={{
          type: 'fadeIn',
          delay: 1000,
        }}
        margin={{
          bottom: 'large',
        }}
      >
        <Box fill="horizontal" align="center">
          <DiceStack dice={dice} locked={locked} handleClick={toggleLocked} />
          <Button
            disabled={locked.every((x) => x) || rollsLeft === 0 || gameEnds === true}
            onClick={roll}
            label={displayRollInfo()}
          />
        </Box>
      </Box>
      <Box
        fill
        align="center"
        elevation="medium"
        pad="medium"
        round="small"
        animation={{
          type: 'fadeIn',
          delay: 1500,
        }}
      >
        {gameEnds ? (
          <EndScoreTable />
        ) : (
          <ScoreTable doScore={dice.every((d) => d === undefined) ? throwDice : doScore} />
        )}
      </Box>
    </Box>
  );
};

export default Yahtzee;
