import React, { useContext } from 'react';
import { myContext } from './reducer';

function Counter() {
  const { state, dispatch } = useContext(myContext);

  return (
    <div>
      Counter count: {state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}

export default Counter;

/**
 * Counter 函数组件
 * 利用 useContext 获得 state 和 dispatch
 * 三个按钮执行三个 dispatch 的 action type 实现三种 count 的变化
 *
 * 这里可以明显看到 “状态相关” 逻辑的复用和本组件无关，本组件只是引入了 hooks，然后渲染即可
 */
