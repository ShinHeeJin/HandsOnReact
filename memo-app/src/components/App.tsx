import { ChangeEvent, FC, useCallback, useState } from "react";
import { styled } from "styled-components";
import { MemoList } from "./MemoList";

export const App: FC = () => {
  const [text, setText] = useState<string>("");
  const [memos, setMemos] = useState<string[]>([]);

  const onChangeText = function (event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  };

  const onClickAdd = () => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
  };

  const onClickDelete = useCallback(
    (index: number) => {
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
      setText("");
    },
    [memos]
  );

  return (
    <div>
      <h1>간단한 메모 애플리케이션</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>추가</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete}></MemoList>
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
