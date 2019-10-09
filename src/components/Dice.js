import React, { useState, useMemo, useContext } from 'react';
import styled, { css } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import {
  FaDiceD6,
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
} from 'react-icons/fa';
import { GameContext } from '../context/Game.context';

const StyledDice = styled.button`
  color: white;
  transition: 0.1s ease-in-out;
  outline: none;
  border: none;
  background: none;
  font-size: 3rem;
  height: 3rem;
  width: 3rem;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 4px 4px 4px black;
  ${(p) =>
    p.isRollin &&
    css`
      animation: spin 0.5s ease-out infinite;
    `}
  ${(p) =>
    p.isRollinBack &&
    css`
      animation: backSpin 0.5s ease-out infinite;
    `}

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes backSpin {
    0% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

const Dice = ({ idx, handleClick, locked, val }) => {
  const [diceValue, setDiceValue] = useState(<FaDiceD6 />);
  const [isRollin, setRollin] = useState(false);
  const { gameProps } = useContext(GameContext);
  const isLocked = gameProps.rollsLeft > 0 && locked === true ? true : false;
  const spring = useSpring({ opacity: isLocked ? 0.4 : 1 });
  useMemo(() => {
    setRollin(true);
    switch (val) {
      case 1:
        return setDiceValue(<FaDiceOne />);
      case 2:
        return setDiceValue(<FaDiceTwo />);
      case 3:
        return setDiceValue(<FaDiceThree />);
      case 4:
        return setDiceValue(<FaDiceFour />);
      case 5:
        return setDiceValue(<FaDiceFive />);
      case 6:
        return setDiceValue(<FaDiceSix />);
      default:
        return setDiceValue(<FaDiceD6 />);
    }
  }, [val]);
  if (isRollin) {
    setTimeout(() => {
      setRollin(false);
    }, 500);
  }
  return (
    <StyledDice
      isRollin={isRollin}
      isRollinBack={isRollin && val === undefined}
      onClick={() => handleClick(idx)}
    >
      <animated.div style={spring}>{diceValue}</animated.div>
    </StyledDice>
  );
};

export default Dice;
