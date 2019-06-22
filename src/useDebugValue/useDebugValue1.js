import React, { useState, useDebugValue } from 'react';

function useMyCount(num) {
  const [ count, setCount ] = useState(0);

  useDebugValue(count > num ? '溢出' : '不足'); // 显示在 devtools 上

  const myCount = () => {
    setCount(count + 2);
  }

  return [ count, myCount ];
}

function App() {
  const [ count, seCount ] = useMyCount(10);

  return (
    <div>
      {count}
      <button onClick={() => seCount()}>setCount</button>
    </div>
  )
}

export default App;
