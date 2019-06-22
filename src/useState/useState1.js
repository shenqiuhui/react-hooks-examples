import React, { useState, Components } from 'react';

// 类组件实现的计数器
// class Counter extends Components {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//   }
//   handleClick = () => {
//     this.setState({ count: this.state.count + 1 })
//   }
//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.handleClick}>
//           Click!
//         </button>
//       </div>
//     )
//   }
// }

// 函数组件加 useState 实现的计数器
function Counter() {
  const [ count, setCount ] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click!
      </button>
    </div>
  )
}

const App = props => {
  return <Counter />
}

export default App;