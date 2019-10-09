import React, { useContext } from 'react';
import { Tabs, Tab, Box } from 'grommet';
import { GameContext } from '../../context/Game.context';
import UpperScore from './UpperScore';
import LowerScore from './LowerScore';
import ResultScores from './ResultScores';

const ScoreTable = ({ doScore }) => {
  const { gameProps } = useContext(GameContext);
  const { scores, totals } = gameProps;
  return (
    <Box fill>
      <Tabs>
        <Tab title="Supérieur">
          <Box fill margin={{ top: 'large' }}>
            <UpperScore scores={scores} doScore={doScore} result={totals.upper} />
          </Box>
        </Tab>
        <Tab title="Inférieur">
          <Box fill margin={{ top: 'large' }}>
            <LowerScore scores={scores} doScore={doScore} result={totals.lower} />
          </Box>
        </Tab>
        <Tab title="Totaux">
          <Box fill margin={{ top: 'large' }}>
            <ResultScores lower={totals.lower} upper={totals.upper} total={totals.total} />
          </Box>
        </Tab>
      </Tabs>
    </Box>
  );
};

export default ScoreTable;
