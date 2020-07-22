import React from 'react';

import { Container } from './styles';

function Button(props) {
  return <Container onClick={e => props.click && props.click(props.label)}>
    {props.label}
    </Container>
}

export default Button;