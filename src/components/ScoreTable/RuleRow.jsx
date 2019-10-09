import React from 'react';
import { Text } from 'grommet';
import styled, { css } from 'styled-components';
import { TableCell } from 'grommet';

const StyledTableRow = styled.tr`
  color: #333;
  transition: 0.3s ease;
  &:hover {
    background: #eee;
  }

  ${(p) =>
    p.isDisabled &&
    css`
      i {
        color: #bbb;
        text-decoration: line-through;
      }
    `}
`;

const RuleRow = ({ name, score, desc, doScore }) => {
  const disable = score !== undefined ? true : false;
  return (
    <StyledTableRow isDisabled={disable} onClick={disable ? null : doScore}>
      <TableCell scope="col">
        <i>{name}</i>
      </TableCell>
      <TableCell scope="col" align="right">
        <Text color={disable ? 'dark' : 'dark-4'} weight={disable ? 'bold' : 'normal'}>
          {disable ? score : desc}
        </Text>
      </TableCell>
    </StyledTableRow>
  );
};

export default RuleRow;
