import React, { useState, Fragment } from 'react';
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';

function App() {
  const [ on, setOn ] = useState(false);

  return (
    <Fragment>
      <Button type="primary" onClick={() => setOn(true)}>
        Open Model
      </Button>
      <Modal visible={on} onCancel={() => setOn(false)}/>
    </Fragment>
  )
}

export default App;
