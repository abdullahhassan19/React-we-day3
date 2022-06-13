import React, { useState, useRef } from "react";

const Timmer = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const handleStart = () => {
    //if timer is running,
    // then skip
    // else if timer is not runing
    // start

    if (timerRef.current) {
      return;
    }
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 100);
  };
  const handleStop = () => {
    // if timer is running
    // then stop

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  const handleReset = () => {
    //timer is running
    // then stop
    // reset value to@as well

    handleStop();
    setTime(0);
  };
  return (
    <>
      <div>
        <h1>{time}</h1>
        <div>
          <button onClick={handleStart}>START</button>
          <button onClick={handleStop}>STOP</button>
          <button onClick={handleReset}>RESET</button>
        </div>
      </div>
    </>
  );
};

export default Timmer;
