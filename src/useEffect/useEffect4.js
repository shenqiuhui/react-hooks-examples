import React, { useState, useEffect } from 'react';

// 订阅相关的函数
const ChatAPI = {
  handle: null,
  isOnline: false,
  login() {
    this.isOnline = true;
    this.handle && this.handle({ isOnline: true });
  },
  logout() {
    this.isOnline = false;
    this.handle && this.handle({ isOnline: false });
  },
  subscribeToFriendStatus(id, handle) {
    console.log(`订阅用户：${id}`);
    this.handle = handle;
  },
  unsubscribeToFriendStatus(id) {
    console.log(`清理用户：${id}`);
    this.handle = null;
  }
};

//
function FriendStatus(props) {
  const [ isOnline, setIsOnline ] = useState(null);

  const handleStatusChange = (status) => setIsOnline(status.isOnline);

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    return () => {
      ChatAPI.unsubscribeToFriendStatus(props.friend.id);
    }
  }, [ props.friend.id ]);

  if (isOnline === null) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <span>计数器：{props.friend.count}</span>
      <br/>
      <span>
        登录状态：
        {
          isOnline ? 'Online' : 'Offline'
        }
      </span>
    </div>
  )
}

function App() {
  const [ show, setShow ] = useState(true);
  const [ count, setCount ] = useState(0);
  const [ userId, setUserId ] = useState(1);

  return (
    <div>
      <span>用户ID：{userId}</span>
      <br/>
      {
        show && <FriendStatus friend={{ id: userId, count }}/>
      }
      <button onClick={() => setShow(!show)}>显示/关闭</button>
      <button onClick={ChatAPI.login.bind(ChatAPI)}>登录</button>
      <button onClick={ChatAPI.logout.bind(ChatAPI)}>退出</button>
      <button onClick={() => setUserId(userId + 1)}>增加用户ID</button>
      <button onClick={() => setCount(count + 1)}>增加计数器</button>
    </div>
  )
}

export default App;