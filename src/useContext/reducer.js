import React, { useReducer } from 'react';

/**
 * useReducer 的理解
 * 每个 reducer 都要返回一个有效的状态值，或者抛出错误
 * 输入旧 state 根据 action 返回新 state，这就是 reducer 的作用
 */

const initalState = { count: 0 };
export const myContext = React.createContext();

// 输入旧的 state 根据 action 返回新的 state
export function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initalState;
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export const ContextProvider = props => {
  const [ state, dispatch ] = useReducer(reducer, initalState);

  return (
    <myContext.Provider value={{ state, dispatch }}>
      {props.children}
    </myContext.Provider>
  )
}

// export {
//   reducer,
//   myContext,
//   ContextProvider
// }