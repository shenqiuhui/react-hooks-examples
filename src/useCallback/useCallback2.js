import React, { useState, useCallback, Component } from 'react';

/**
 * 知识点：
 * Foo1 类组件，没有使用箭头函数，重新生成了多个函数
 * Foo2 类组件，使用 bind 绑定 this，只有一个函数
 * Foo3 函数组件，反复生成多个函数
 * Foo4 函数组件，使用 useCallback，避免重复生成函数
 */

class Com1 extends Component {
  handleClick() {
    console.log('click happened');
  }
  render() {
    return <button onClick={() => this.handleClick()}>Click me</button>
  }
}

class Com2 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('click happened');
  }
  render() {
    return <button onClick={this.handleClick}>Click me</button>
  }
}

function Com3() {
  const handleClick = () => {
    console.log('click happened');
  }
  return <button onClick={handleClick}>Click me</button>
}

function Com4() {
  const memoizedHandleClick = useCallback(() => {
    console.log('click happened');
  }, []);

  return <button onClick={memoizedHandleClick}>Click me</button>
}

const Child = React.memo(({ a, memo }) => {
  return (
    <div>
      {console.log('Parent 渲染')}
      <span>a: {a}</span>
      <button onClick={memo}>Click in child</button>
    </div>
  )
});

const App = props => {
  const [ a, setA ] = useState(0);
  const [ b, setB ] = useState(0);
  const memoHandleClick = useCallback(() => console.log('click'), []);

  return (
    <div>
      {console.log('App 渲染')}
      <Child a={a} memo={memoHandleClick} />
      <button onClick={() => setA(a + 1)}>改变 a</button>
      <button onClick={() => setB(b + 1)}>改变 b</button>
      <button onClick={memoHandleClick}>Click</button>
    </div>
  )
}

export default App;
