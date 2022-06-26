import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [msg , setMsg]= useState('')
  const handleClick = async ()=> {
     const data = await fetch('/api/home')
     const json = await data.json()
     const msg = json.msg
     setMsg(msg)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <button onClick={handleClick}>
          dis bonjour
      </button>
      <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
