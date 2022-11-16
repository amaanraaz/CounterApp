import React,{ useState } from "react";
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <div className="content">
      <h1>Count {count}</h1>
      <button className="btn" onClick={()=>setCount(count+1)}>Increase</button>
      <button className="btn" onClick={()=>count<=0?"":setCount(count-1)}>Decrease</button>
      <button className="btn" onClick={()=>setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
