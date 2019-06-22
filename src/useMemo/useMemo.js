import React, { useState, useMemo } from 'react';

/**
 * useMemo 保存了渲染的结果
 * 分别改变变量 a，b 的值，观察变量 child1 和 child2 的变化
 * 点击修改 a，child1 和 child2 都重新计算
 * 点击修改 b，child2 重新计算，child1 只计算一次
 */

// 利用 useMemo 解决重复渲染的问题，优化性能
// 可以通过改变 a b 的值看到两个组件的渲染情况
// 如果 child1 是一个复杂组件，则 child2 会造成重复计算重复渲染

// 可以理解为 child1 保存了回调函数返回的结果
// 除非 [a] 发生变化，才会重新保存这个结果

let ch = null;

const Child = ({ val }) => {
  console.log('Child 重新渲染了');
  return <h2>{val}</h2>
}

function Parent({ a, b }) {
  const child1 = useMemo(() => (
    <div>
      {console.log('child1 重新计算')}
      <Child val={b} />
    </div>
  ), [ a ]);

  console.log('child1 是否和之前相等', child1 === ch);
  ch = child1;

  const child2 = (
    <div>
      {console.log('child2 重新计算')}
      <Child val={b}/>
    </div>
  )

  return (
    <div>
      {child1}
      {child2}
    </div>
  )
}

const App = props => {
  const [ a, setA ] = useState(0);
  const [ b, setB ] = useState(0);

  return (
    <div>
      <Parent a={a} b={b} />
      <button onClick={() => setA(a + 1)}>改变 a</button>
      <button onClick={() => setB(b + 1)}>改变 b</button>
    </div>
  )
}

export default App;
