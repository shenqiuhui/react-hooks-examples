import React, { useState, useRef, Fragment } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef();

  console.log('inputEl', inputEl);
  const onButtonClick = () => {
    inputEl.current.focus();
  }

  return (
    <Fragment>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>获取焦点</button>
    </Fragment>
  )
}

const App = props => {
  const [ count, setCount ] = useState(0);

  return (
    <div>
      {count}
      <TextInputWithFocusButton />
      <button onClick={() => setCount(count + 1)}>count + 1</button>
    </div>
  )
}

export default App;
