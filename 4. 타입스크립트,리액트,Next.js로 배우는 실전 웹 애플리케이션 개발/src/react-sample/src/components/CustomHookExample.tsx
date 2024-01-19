import React, { useState, useCallback, useDebugValue } from "react";

const useInput = () => {
  const [state, setState] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);

  useDebugValue(`Input : ${state}`);

  return [state, onChange] as const;
};

const Input = () => {
  const [text, onChangeText] = useInput();
  console.log("Input!");
  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <p>Input : {text}</p>
    </div>
  );
};
export default Input;
