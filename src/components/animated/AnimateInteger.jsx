import { useSpring, animated, config } from 'react-spring';
import React, { useState, useMemo } from 'react';

const AnimateInteger = ({ value = 0, spring = 'default' }) => {
  const [animValue, setAnimValue] = useState(value);
  useMemo(() => {
    setAnimValue(value);
  }, [value]);
  const { number } = useSpring({ number: animValue, from: { number: 0 }, config: config[spring] });
  return <animated.span>{number.interpolate((val) => Math.floor(val))}</animated.span>;
};
export default AnimateInteger;
