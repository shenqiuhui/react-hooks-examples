import React, { useState, useEffect, Component, Fragment }from 'react';

function HooksCom() {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    document.title = `You clicked ${count} times (hooks)`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click!
      </button>
    </div>
  )
}

// 类组件
class ClassCom extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    console.log('mount');
    document.title = `You clicked ${this.state.count} times (class)`;
  }
  componentDidUpdate() {
    console.log('update');
    document.title = `You clicked ${this.state.count} times (class)`;
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click!
        </button>
      </div>
    )
  }
}

function App() {
  return (
    <Fragment>
      <HooksCom />
      <ClassCom />
    </Fragment>
  )
}

export default App;
