import React, { memo, useState } from "react";

type FizzProps = {
  isFizz: boolean;
};

const Fizz = (props: FizzProps) => {
  const { isFizz } = props;
  console.log(`Fizz가 다시 그려졌습니다. isFizz=${isFizz}`);
  return <span>{isFizz ? "Fizz" : ""}</span>;
};

type BuzzProps = {
  isBuzz: boolean;
  onClick: () => void;
};

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz, onClick } = props;
  console.log(`Buzz가 다시 그려졌습니다. isBuzz=${isBuzz}`);
  return <span onClick={onClick}>{isBuzz ? "Buzz" : ""}</span>;
});

export const ParentMemo2 = () => {
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  const onBuzzClick = () =>
    console.log(`Buzz가 클릭됐습니다. isBuzz=${isBuzz}`);

  console.log(`Parent가 다시 그려졌습니다. count=${count}`);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>현재 카운트: {count}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />{" "}
        {/* ParentMemo2가 다시그려질 때 마다 onBuzzClick가 새로 정의되어서 Buzz에 전달되어 재렌더링 되는 것  */}
      </p>
    </div>
  );
};

export default ParentMemo2;
