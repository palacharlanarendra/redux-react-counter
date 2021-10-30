import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { handleIncrement, handleDecrement, reset } from '../store/actions.js';
function App(props) {
  const [step, setStep] = useState(5);
  const [limit, setLimit] = useState(Infinity);
  function handleStep(event) {
    var num = Number(event.target.innerText);
    setStep(num);
  }
  function handleLimit(event) {
    var num = Number(event.target.innerText);
    setLimit(num);
  }
  return (
    <>
      <Header />
      <button onClick={() => props.dispatch(handleIncrement(step, limit))}>
        Increment
      </button>
      <button onClick={() => props.dispatch(handleDecrement(step, limit))}>
        Decrement
      </button>
      <button onClick={() => props.dispatch(reset())}>Reset</button>

      <div>
        <button onClick={handleStep}>5</button>
        <button onClick={handleStep}>10</button>
        <button onClick={handleStep}>15</button>
      </div>
      <div>
        <button onClick={handleLimit}>15</button>
        <button onClick={handleLimit}>100</button>
        <button onClick={handleLimit}>200</button>
      </div>
    </>
  );
}

export default connect()(App);
