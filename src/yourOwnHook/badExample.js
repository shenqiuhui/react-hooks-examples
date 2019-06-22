import React, { useState, useEffect, Fragment } from 'react';

function Counter1(){
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    console.log('开启一个新的定时器')
    const timer = setInterval(()=>{
      setCount(count + 1);
    },1000);
    return ()=>{
      console.log('销毁老的定时器')
      clearInterval(timer);
    }
  });

  return <p>{count}</p>
}

function Counter2(){
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    console.log('开启一个新的定时器')
    const timer = setInterval(()=>{
      setCount(count + 1);
    },1000);
    return ()=>{
      console.log('销毁老的定时器')
      clearInterval(timer);
    }
  });

  return <p>{count}</p>
}

function App(){
  return (
    <Fragment>
      <Counter1 />
      <Counter2 />
    </Fragment>
  )
}

export default App;
