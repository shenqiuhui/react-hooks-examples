import React, { useState } from 'react';

function Counter() {
  const [ count, setCount ] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Click!
      </button>
    </div>
  )
}

const App = props => {
  return <Counter />
}

export default App;
