import React, { useState, useCallback, PureComponent, Component } from 'react';

/**
 * 知识点：
 * 避免昂贵组件的渲染
 * Com1 的 fn 是一个普通函数，每次渲染 Com1 都重新生成
 * Com2 的 fn 用了 useCallback 避免了重新生成
 * 点击 P1 + 1 Com2 渲染，但不会渲染昂贵组件，因为 fn 没变
 * 昂贵组件使用 PureComponent 或者 React.memo 生成
 */

// Com1 和 Com2 是两个组件，它们都渲染了一个昂贵组件，通过 useCallback 避免了重新生成 Com2 的 fn1 callback 函数，因此避免了昂贵组件的重新渲染

let fnn1 = null;
let fnn2 = null;

// class ExpensiveCom extends PureComponent {
//   render() {
//     const date = new Date();
//     return <h1 onClick={this.props.onClick}>
//       {date.getSeconds()}
//       我是一个昂贵的组件！渲染耗时！
//     </h1>
//   }
// }

// 使用 React.memo 改写
const ExpensiveCom = React.memo(({ onClick }) => {
  const date = new Date();
  return <h1 onClick={onClick}>
    {console.log('hahahahahh')}
    {date.getSeconds()}
    我是一个昂贵的组件！渲染耗时！
  </h1>
});

function Com1({ p1 }) {
  const fn = () => console.log('fn', p1);
  console.log('Com1', Object.is(fnn1, fn));
  fnn1 = fn;
  return <ExpensiveCom onClick={fn} />
}

function Com2({ p2 }) {
  const fn = useCallback(() => console.log('fn', p2), [ p2 ]);
  console.log('Com2', Object.is(fnn2, fn));
  fnn2 = fn;
  return <ExpensiveCom onClick={fn} />
}

// class App extends Component {
//   state = {
//     p1: 0,
//     p2: 0
//   }
//   render() {
//     return (
//       <div>
//         <h2>每次点击 fn 都是新的</h2>
//         <Com1 p1={this.state.p1} />
//         <button
//           onClick={() => this.setState({ p1: this.state.p1 + 1 })}
//         >p1 + 1</button>
//         <br/>
//         <h2>不用重复生成 fn</h2>
//         <Com2 p2={this.state.p2} />
//         <button
//           onClick={() => this.setState({ p2: this.state.p2 + 1 })}
//         >p2 + 1</button>
//       </div>
//     )
//   }
// }

function App() {
  const [ p1, setP1 ] = useState(0);
  const [ p2, setP2 ] = useState(0);

  return (
    <div>
      <h2>每次点击 fn 都是新的</h2>
      <Com1 p1={p1} />
      <button
        onClick={() => setP1({ p1: p1 + 1 })}
      >p1 + 1</button>
      <br/>
      <h2>不用重复生成 fn</h2>
      <Com2 p2={p2} />
      <button
        onClick={() => setP2({ p2: p2 + 1 })}
      >p2 + 1</button>
    </div>
  )
}

export default App;
