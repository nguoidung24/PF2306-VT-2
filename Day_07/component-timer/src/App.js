import React, { useState, useEffect } from 'react';
import "./App.css";
function App() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        const newTimer = prev - 1;
        if (newTimer === 0) {
          clearInterval(interval);
        }
        return newTimer;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log("r")
  return (
    <div className="App">
      <label>{timer}</label>
    </div>
  );
}

export default App;