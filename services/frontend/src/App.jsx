import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useWebSocket from 'react-use-websocket';

const WS_URL = 'ws://127.0.0.1:8080/api/ws';

function App() {
  const [count, setCount] = useState(0)

  const { sendMessage, lastMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    onClose: () => {
      console.log('WebSocket connection closed.');
    },
    onError: (event) => {
      console.error('WebSocket error:', event);
    },
    onMessage: (event) => {
      const data = JSON.parse(event.data);
      console.log('WebSocket message received:', data);
      // if (data.count !== undefined) {
      //   setCount(data.count);
      // }
    },
  });
  // useWebSocket(WS_URL, {
  //   onOpen: () => {
  //     console.log('WebSocket connection established.');
  //   },

  //   onClose: () => {
  //     console.log('WebSocket connection closed.');
  //   },
  //   onError: (event) => {
  //     console.error('WebSocket error:', event);
  //   },
  //   onMessage: (event) => {
  //     const data = JSON.parse(event.data);
  //     console.log('WebSocket message received:', data);
  //     if (data.count !== undefined) {
  //       setCount(data.count);
  //     }
  //   },
  // });

  const handleClick = () => {
    sendMessage(JSON.stringify({ message: 'increment' }));
    fetch("/api")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }
    ).then((data) => {
        setCount(data.count)
      }
    )
  }
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
