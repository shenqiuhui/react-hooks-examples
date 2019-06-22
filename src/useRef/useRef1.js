import React, { useState, useRef, useEffect, Component } from 'react';

// useRef 就是函数组件中的实例属性，和类组件的实例属性几乎完全一致

function Counter1() {
  const [ count, setCount ] = useState(0);

  const prevCountRef = useRef(0);
  useEffect(() => {
    prevCountRef.current = count;
    console.log('我后执行');
  });

  const prevCount = prevCountRef.current;

  return (
    <div>
      <h1>Now: {count}, Before: {prevCount}</h1>
      {console.log('我先执行')}
      <button onClick={() => setCount(count + 1)}>更新 count</button>
    </div>
  )
}


class Counter2 extends Component {
  state = { count: 0 };
  prevCount = 0;
  componentDidMount() {
    this.prevCount = this.state.count;
    console.log('我后执行');
  }
  componentDidUpdate() {
    this.prevCount = this.state.count;
    console.log('我后执行');
  }
  render() {
    return (
      <div>
        <h1>Now: {this.state.count}, Before: {this.prevCount}</h1>
        {console.log('我先执行')}
        <button onClick={() => this.setState({
          count: this.state.count + 1
        })}>更新 count</button>
      </div>
    )
  }
}

const Ref = { current: null };

function Counter3() {
  const [ count, setCount ] = useState(0);
  const prevCountRef = Ref;

  useEffect(() => {
    prevCountRef.current = count;
    console.log('我后执行');
  });

  const prevCount = prevCountRef.current;

  return (
    <div>
      <h1>Now: {count}, Before: {prevCount}</h1>
      {console.log('我先执行')}
      <button onClick={() => setCount(count + 1)}>更新 count</button>
    </div>
  )
}

/**
 * Counter1 中 useRef 保留在函数组件的整个生命周期中
 * 而 Counter2 中 Ref 是个全局变量，组件卸载数值依然不变
 */


const App = props => {
  const [ show, setShow ] = useState(true);

  return (
    <div>
      {show ? <Counter1 /> : null}
      <hr/>
      {show ? <Counter2 /> : null}
      <hr/>
      {show ? <Counter3 /> : null}
      <hr/>
      <button onClick={() => setShow(!show)}>重新挂载 Counter</button>
    </div>
  )
}

export default App;
