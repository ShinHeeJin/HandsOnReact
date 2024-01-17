import React, { useCallback, useState } from "react";

type ButtonProps = {
  onClick: () => void;
};

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props;

  console.log(`DecrementButton이 다시 그려졌습니다.`);

  return <button onClick={onClick}>Decrement</button>;
};

const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;
  console.log("IncrementButton이 다시 그려졌습니다.");

  return <button onClick={onClick}>Increment</button>;
});

const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;
  console.log("DoubleButton 다시 그려졌습니다.");

  return <button onClick={onClick}>Double</button>;
});

export const UseCallbackSample = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  const double = useCallback(() => {
    setCount((c) => c * 2);
  }, []); // 빈 배열을 넣는경우 첫 번째 그려질 때 생성된 함수를 항상 반환한다.

  return (
    <div>
      <p>Count : {count}</p>
      <DecrementButton onClick={decrement} />{" "}
      {/* 부모가 재렌더링 되면 DecrementButton도 재렌더링 된다. */}
      <IncrementButton onClick={increment} />{" "}
      {/* 부모가 재렌더링 되면 IncrementButton도 재렌더링 된다. */}
      <DoubleButton onClick={double} />{" "}
      {/* 부모가 재렌더링 되도 DoubleButton은 재렌더링 되지 않는다. */}
    </div>
  );
};

export default UseCallbackSample;
