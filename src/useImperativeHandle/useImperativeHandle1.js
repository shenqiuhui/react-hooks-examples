import React, { useRef, useImperativeHandle } from 'react';

/**
 * 官方概念：自定义要开放给父组件的实例值
 * 简要理解就是通过父组件访问子组件的实例，包括状态也可以
 * 第三个参数的作用
 */

/**
 * 括号中的 FancyButton 是一个渲染函数，并非函数组件
 * 目的就是用于 forwardRef 的参数，返回的 FancyButton 是具备 forwardRef 功能的函数组件
 * 也就是下面使用中可以传递 refs 的组件
 */

const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} type="text" />
});

const App = props => {
  const fancyInputRef = useRef();

  return (
    <div>
      <FancyInput ref={fancyInputRef} />
      <button
        onClick={() => fancyInputRef.current.focus()}
      >父组件调用子组件的 focus</button>
    </div>
  )
}

export default App;
