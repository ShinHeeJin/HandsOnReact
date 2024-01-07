import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "홍길동",
    comment: "안녕하세요!",
  },
  {
    name: "고길동",
    comment: "반갑습니다!",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
