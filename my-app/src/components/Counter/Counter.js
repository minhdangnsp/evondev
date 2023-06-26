import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handelImcrement = () => {
    setTimeout(function delay() {
      // stale state
    //   setCount(count + 1);
      //fix stale state => use callback function
      setCount((count) => count + 1);
    }, 1000);
  };
  return <div onClick={handelImcrement}>Increment {count}</div>;
};

export default Counter;
