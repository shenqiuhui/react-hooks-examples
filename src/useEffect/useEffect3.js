import React, { useState, useEffect } from 'react';

function Counter() {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount(prev => prev + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}

const App = props => {
  return <Counter />
}

export default App;