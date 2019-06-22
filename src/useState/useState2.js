import React, { useState } from 'react';

function Counter() {
  const [ count, setCount ] = useState(0);
  const countAction = (preCount, n) => preCount + n;

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(countAction(count, 2))}>
        Click!
      </button>
    </div>
  )
}

const App = props => {
  return <Counter />
}

export default App;
