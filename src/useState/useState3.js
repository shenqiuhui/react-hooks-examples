import React, { Component, Fragment } from 'react';
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';

// Toggle 组件专门提供切换状态和切换方法
class Toggle extends Component {
  constructor(props) {
    super(props);

    // 初始化 on 的值
    this.state.on = this.props.initial;
  }
  state = { on: false }
  toggle = () => {
    this.setState({ on: !this.state.on });
  }
  render() {
    return this.props.children(this.state.on, this.toggle);
  }
}

function App() {
  return (
    <Toggle initial={false}>
      {
        (on, toggle) => (
          <Fragment>
            <Button type="primary" onClick={toggle}>
              Open Model
            </Button>
            <Modal visible={on} onCancel={toggle}/>
          </Fragment>
        )
      }
    </Toggle>
  )
}

export default App;
