import React, { useState } from 'react';

import { Container } from './styles';
import Display from '../Display';
import Button from '../Button';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

function Calculator() {

  const [state, setState] = useState(initialState)

  function clearMemory() {
    setState(initialState)
  }

  function setOperation(n) {
    console.log(n)
  }

  function addDigit(n) {
    console.log(n)
  }



  return <Container>
    <Display value={state.displayValue}/>
    <Button label="AC" click={() => clearMemory()} triple/>
    <Button label="/" click={n => setOperation(n)} operation/>
    <Button label="7" click={n => addDigit(n)} />
    <Button label="8" click={n => addDigit(n)} />
    <Button label="9" click={n => addDigit(n)} />
    <Button label="*" click={n => setOperation(n)} operation/>
    <Button label="4" click={n => addDigit(n)} />
    <Button label="5" click={n => addDigit(n)} />
    <Button label="6" click={n => addDigit(n)} />
    <Button label="-" click={n => setOperation(n)} operation/>
    <Button label="1" click={n => addDigit(n)} />
    <Button label="2" click={n => addDigit(n)} />
    <Button label="3" click={n => addDigit(n)} />
    <Button label="+" click={n => setOperation(n)} operation/>
    <Button label="0" click={n => addDigit(n)} double/>
    <Button label="." click={n => addDigit(n)} />
    <Button label="=" click={n => setOperation(n)} operation/>
  </Container>
}

export default Calculator;