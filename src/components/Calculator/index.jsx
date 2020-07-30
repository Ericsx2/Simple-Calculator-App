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

  const [state, setState] = useState({...initialState})
  
  function clearMemory() {
    setState(initialState)
  }

  function setOperation(n) {
    if ( state.current === 0) {
      const values = state.values
      setState({...state, operation: n, current: 1, clearDisplay: true, values})
    }else{
      const equals = n === '='
      const currentOperation = state.operation
      
      const values = [...state.values]
      switch(currentOperation){
        case '+':
          values[0] += values[1]
          break
        case '-':
          values[0] -= values[1]
          break
        case '*':
          values[0] *= values[1]
          break
        case '/':
          values[0] /= values[1]
          break
        default:
        }
        
      
        values[1] = 0

        setState({
        displayValue: values[0],
        operation: equals ? null : n,
        current: equals ? 0: 1,
        clearDisplay: !equals,
        values
      })
    }
  }

  function addDigit(n) {
    if (n === '.' && state.displayValue.includes('.')){
      return
    }

    let values = [...state.values]
    const i = state.current
    
    const clearDisplay = state.displayValue === '0'
    || state.clearDisplay
    const currentValue = clearDisplay ? '' : state.displayValue
    const displayValue = currentValue + n
    
    values[i] = parseFloat(displayValue)
    
    setState({...state, displayValue, clearDisplay: false, values, current: i})
    
  }



  return <Container>
    <Display value={state.displayValue}/>
    <Button label="AC" click={() => clearMemory()} triple/>
    <Button label="/" click={setOperation} operation/>
    <Button label="7" click={addDigit} />
    <Button label="8" click={addDigit} />
    <Button label="9" click={addDigit} />
    <Button label="*" click={setOperation} operation/>
    <Button label="4" click={addDigit} />
    <Button label="5" click={addDigit} />
    <Button label="6" click={addDigit} />
    <Button label="-" click={setOperation} operation/>
    <Button label="1" click={addDigit} />
    <Button label="2" click={addDigit} />
    <Button label="3" click={addDigit} />
    <Button label="+" click={setOperation} operation/>
    <Button label="0" click={addDigit} double/>
    <Button label="." click={addDigit} />
    <Button label="=" click={setOperation} operation/>
  </Container>
}

export default Calculator;