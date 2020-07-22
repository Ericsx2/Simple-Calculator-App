import React from 'react';

import { Container } from './styles';
import Display from '../Display';
import Button from '../Button';

function Calculator() {

  function clearMemory() {
    console.log('Limpar')
  }

  function setOperation(n) {
    console.log(n)
  }

  function addDigit(n) {
    console.log(n)
  }



  return <Container>
    <Display value="100"/>
    <Button label="AC" click={() => clearMemory()} />
    <Button label="/" click={n => setOperation(n)} />
    <Button label="7" click={n => addDigit(n)} />
    <Button label="8" click={n => addDigit(n)} />
    <Button label="9" click={n => addDigit(n)} />
    <Button label="*" click={n => setOperation(n)} />
    <Button label="4" click={n => addDigit(n)} />
    <Button label="5" click={n => addDigit(n)} />
    <Button label="6" click={n => addDigit(n)} />
    <Button label="-" click={n => setOperation(n)} />
    <Button label="1" click={n => addDigit(n)} />
    <Button label="2" click={n => addDigit(n)} />
    <Button label="3" click={n => addDigit(n)} />
    <Button label="+" click={n => setOperation(n)} />
    <Button label="0" click={n => addDigit(n)} />
    <Button label="." click={n => addDigit(n)} />
    <Button label="=" click={n => setOperation(n)} />
  </Container>
}

export default Calculator;