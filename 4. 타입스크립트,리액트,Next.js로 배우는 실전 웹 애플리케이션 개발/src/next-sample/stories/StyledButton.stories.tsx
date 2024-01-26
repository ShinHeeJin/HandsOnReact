import { Meta } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

export default {
  title: "StyledButton (1)",
  component: StyledButton,
  argTypes: { onClick: { action: "clicked" } },
} as Meta<typeof StyledButton>;

const incrementAction = action("increment");

export const Primary = (props) => {
  const [count, setCount] = useState(0);

  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count); // 임의의 데이터를 actions에 표시하고 싶을 때
    setCount((c) => c + 1);
  };
  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      Primary, Count : {count}
    </StyledButton>
  );
};

export const Success = (props) => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  );
};

export const Transparent = (props) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  );
};
