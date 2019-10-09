import React, { useContext, useState } from 'react';
import id from 'uuid/v1';
import { Box, Form, FormField, Button, Heading } from 'grommet';
import useLocalStorage from '../../hooks/uselocalStorage';
import { LOCAL_STORAGE_KEY } from '../../assets/app.settings';
import { GameContext } from '../../context/Game.context';
import HiScoreTable from './HiScoreTable';

const HiScores = () => {
  const { gameProps } = useContext(GameContext);
  const score = gameProps.totals.total;
  const [isSub, setSub] = useState(false);
  const [storedScore, setLocalStorageScore] = useLocalStorage(LOCAL_STORAGE_KEY, []);
  const handleSubmit = (name) => {
    if (!name) {
      return alert('Inscris ton nom...');
    }
    setSub(true);
    return setLocalStorageScore([...storedScore, { name, score, id: id() }]);
  };
  return (
    <Box fill>
      <HiScoreTable scores={storedScore.sort((a, b) => b.score - a.score)} />
      {!isSub && (
        <Form onSubmit={(e) => handleSubmit(e.value.name)}>
          <FormField
            name="name"
            label={
              <Heading level={6} margin={{ bottom: 'none' }}>
                Ton nom :
              </Heading>
            }
          />
          <Button type="submit" primary label="Confirmer" disabled={isSub} />
        </Form>
      )}
    </Box>
  );
};

export default HiScores;
