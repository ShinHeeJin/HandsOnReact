import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid center;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgrey;
  }
`;

const ContextText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`;

export default function CommentListItem(props) {
  const { comment } = props;

  return (
    <Wrapper>
      <ContextText>{comment.content}</ContextText>
    </Wrapper>
  );
}
