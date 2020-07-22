import React from 'react';

import { Container } from './styles';

function Display(props) {
  return <Container>{props.value}</Container>;
}

export default Display;