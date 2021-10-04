import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function React_Hooks() {
  const [textColor, setTextColor] = useState("green");

  function changeTextColor(){
    if(textColor==="blue")
      setTextColor("green")
    
    else
    setTextColor("blue")
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className={textColor==="blue" ? "blueText" : "greenText" } >
          Hello, let's learn a thing or two about React Hooks
        </p>
        <button onClick={()=>changeTextColor()}> Change Color</button>
      </header>
    </div>
  );
}

export default React_Hooks;
