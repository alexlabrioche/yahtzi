import React from 'react';
import { withRouter } from 'react-router';
import { HOME_PATH, DEFAULT_PATH } from '../../assets/app.settings';
import { Box, Heading, Anchor, Clock } from 'grommet';

const Appbar = ({ location }) => {
  const { pathname } = location;
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      style={{ zIndex: '1' }}
    >
      <Heading level={pathname === HOME_PATH ? 2 : 3} margin="none">
        <Anchor
          href={pathname === HOME_PATH ? DEFAULT_PATH : HOME_PATH}
          primary
          label={pathname === HOME_PATH ? '/ Play' : '/ retour'}
        />
      </Heading>
      <Clock type="digital" precision="minutes" size="medium" />
    </Box>
  );
};

export default withRouter(Appbar);
