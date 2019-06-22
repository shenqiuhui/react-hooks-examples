import React, {  useCallback, useRef } from 'react';

/**
 * forwardRef 返回一个组件
 * 把他收到的 ref 转发给子组件
 * 转发 refs 不常用
 * ref 转发是一种自动将 ref 通过组件传递给子组件的技术
 * ref 转发是一种选择性加入的功能，可以让某些组件接收他们收到的 ref
 */

const FancyButton = React.forwardRef((props, ref) => (
  <div>
    <input ref={ref} type="text" />
    <button>{props.children}</button>
  </div>
));

// 普通组件做不到，因为 props 不传递 ref
// const FancyButton = props => (
//   <div>
//     <input ref={props.ref} type="text" />
//     <button>{props.children}</button>
//   </div>
// )

function App() {
  const ref = useRef();
  const handleClick = useCallback(() => ref.current.focus(), [ ref ]);

  return (
    <div>
      <FancyButton ref={ref}>Click Me</FancyButton>
      <button onClick={handleClick}>获取焦点</button>
    </div>
  )
}

export default App;
