import { useState } from "react";
import './Counter.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((value) => value + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={increment}>increment</button>
    </div>
  );
};         