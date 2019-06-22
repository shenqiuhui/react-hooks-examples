import React, { useState, useContext } from 'react';

const myContext = React.createContext();

function Com() {
  const { count, setCount } = useContext(myContext);

  return (
    <div>
      子组件：{count}
      <br />
      <Haha />
      <button onClick={() => setCount(count + 1)}>count + 1</button>
    </div>
  )
}

function Haha() {
  const { count } = useContext(myContext);

  return (
    <div>
      孙子组件：{count}
      <br />
    </div>
  )
}

function App() {
  const [ count, setCount ] = useState(0);

  return (
    <myContext.Provider value={{ count, setCount }}>
      父组件：{count}
      <br />
      <Com />
    </myContext.Provider>
  )
}

export default App;