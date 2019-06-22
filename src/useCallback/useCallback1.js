import React, { useCallback, Component } from 'react';

/**
 * 要理解 useCallback 的意义
 * 每次修改 num，memoizedCallback 才发生了变化，否则不变，避免重新生成
 */

let fn = null;

function TestUseCallback({ nums, name }) {
  const memoizedCallback = useCallback(() => {
    console.log(nums, 'Hello world!');
  }, [ nums ]);

  console.log('callback 是否相同：', Object.is(fn, memoizedCallback), name);
  console.log('nums > ', nums, name);
  fn = memoizedCallback;

  return (
    <div>
      <button onClick={memoizedCallback}>TestUseCallback</button>
    </div>
  )
}

class App extends Component {
  state = {
    nums: [1, 2, 3],
    count: 0,
    name: 'hello'
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => ({ count: state.count + 1 }));
    }, 3000);
  }
  handleChangeNum = () => this.setState({ nums: [4, 5, 6], name: 'world' });
  render() {
    const { nums, name } = this.state;

    return (
      <div className="App">
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.handleChangeNum}>修改传入的 nums 值</button>
        <TestUseCallback nums={nums} name={name} />
      </div>
    )
  }
}

export default App;
