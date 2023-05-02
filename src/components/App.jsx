import React, { useState } from "react";

function App() {

    const [count, setCounter] = useState(0);
    function counterIncrease() {
        setCounter(count + 1);
    }
    function counterDecrease() {
        setCounter(count - 1);
    }
    setInterval(updateTheTime, 1000);

    const now = new Date().toLocaleTimeString();
    const [time, setRecentTime] = useState(now);

    function updateTheTime() {
        const newTime = new Date().toLocaleTimeString();
        setRecentTime(newTime);
    }

    return (
        <div className="container">
        <p>EST Recent Time</p>
        <h1>{time}</h1>
        <button onClick={updateTheTime}>Recent Time</button>
        <br></br>  <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      
        <p>Number Counter</p>
        <h2>{count}</h2>
        <button onClick={counterDecrease}>-</button>
        <button onClick={counterIncrease}>+</button>
        </div>
    );
}

export default App;