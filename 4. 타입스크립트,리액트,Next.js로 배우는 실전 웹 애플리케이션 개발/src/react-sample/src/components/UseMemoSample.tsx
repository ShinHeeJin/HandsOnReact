import React, { useState, useMemo } from "react";

const UseMemoSample = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>(["text"]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onClickButton = () => {
    setItems((prevItems) => {
      return [...prevItems, text];
    });
    setText("");
  };
  // 배열을 순회 하면서 각요소에 대해 콜백을 실행하고 콜백 반환값을 누적시킨다. 순회 종료후 최종 누적값 반환
  const numberOfCharacters1 = items.reduce((accumulator, currentText) => {
    console.log("numberOfCharacters1");
    return accumulator + currentText.length;
  }, 0);

  const numberOfCharacters2 = useMemo(() => {
    console.log("numberOfCharacters2");
    return items.reduce(
      (accumulator, currentText) => accumulator + currentText.length,
      0
    );
  }, [items]);

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of Characters 1: {numberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
    </div>
  );
};

export default UseMemoSample;
