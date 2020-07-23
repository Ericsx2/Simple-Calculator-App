import React from 'react';

import { Container } from './styles';

function Button(props) {
  return <Container double={props.double} triple={props.triple} operation={props.operation}
      onClick={e => props.click && props.click(props.label)}>
      {props.label}
    </Container>
}

export default Button;