import { useState } from "react";

function useCounter(initialValue) {
  // 초기 카운트 값을 받아 state를 생성하여 제공하고 증감소 편리함수를 제공한다.
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter;
