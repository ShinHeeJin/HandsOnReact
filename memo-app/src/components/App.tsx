import { ChangeEvent, FC, useCallback, useState } from "react";
import { styled } from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {
  const { memos, addTodo, deleteTodo } = useMemoList();
  const [text, setText] = useState<string>("");

  const onChangeText = function (event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  };

  const onClickAdd = () => {
    addTodo(text);
    setText("");
  };

  const onClickDelete = useCallback(
    (index: number) => {
      console.log(index);
      deleteTodo(index);
      setText("");
    },
    [deleteTodo]
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
