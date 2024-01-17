import { useState } from "react";

type CounterProps = {
  initValue: number;
};

const CounterSample = (props: CounterProps) => {
  const { initValue } = props;

  const [count, setCount] = useState(initValue);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
};

export default CounterSample;
