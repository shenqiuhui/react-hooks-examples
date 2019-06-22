import React, { useEffect, useLayoutEffect, Component } from 'react';

/**
 * 参考类组件声明周期函数，注意它的执行时机
 * 可以把 useLayoutEffect 理解为函数组件的 componentDidMount 和 componentDidUpdate，因为他们的执行时机相同
 */

function Com() {
  useEffect(() => {
    console.log('useEffect 执行...');
    return () => {
      console.log('useEffect 销毁...');
    }
  });

  useLayoutEffect(() => {
    console.log('useLayoutEffect 执行...');
    return () => {
      console.log('useLayoutEffect 销毁...');
    }
  });

  return (
    <div>
      {console.log('Com 渲染')}
      <h2>Com1</h2>
    </div>
  )
}

class App extends Component {
  state = { count: 0 }
  setCount = () => {
    this.setState({ count: this.state.count + 1 });
  }
  componentDidMount() {
    console.log('App componentDidMount');
  }
  componentDidUpdate() {
    console.log('App componentDidUpdate');
  }
  render() {
    return (
      <div>
        {this.state.count}
        <Com />
        {console.log('App 渲染')}
        <button onClick={this.setCount}>count + 1</button>
      </div>
    )
  }
}

export default App;
