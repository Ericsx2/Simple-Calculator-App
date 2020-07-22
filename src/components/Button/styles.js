import styled, { css } from 'styled-components';

export const Container = styled.button`
  font-size: 1.4em;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  outline: none;

  :active{
    background-color: #ccc;
  }

  grid-column: ${props => props.double ? 'span 2' : ''};

  grid-column: ${props => props.triple ? 'span 3' : ''};

  ${props => props.operation && css`
    background-color: #fa8231;
    color: #fff;

    :active {
      background-color: #fa8231cc;
    }
  `}
`;
