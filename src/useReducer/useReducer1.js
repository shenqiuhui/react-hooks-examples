import React, { useReducer, Fragment } from 'react';

// const initalCountState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return { count: action.payload };
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// function init(initalCountState) {
//   return { count: initalCountState.count + 1 };
// }

function Counter({ initalCount }) {
  const [ state, dispatch ] = useReducer(reducer, initalCount);

  return (
    <Fragment>
      count: { state.count }
      <button
        onClick={() => dispatch({ type: 'reset', payload: initalCount.count })}
      >Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </Fragment>
  )
}

function App() {
  return <Counter initalCount={{ count: 0 }} />
}

export default App;