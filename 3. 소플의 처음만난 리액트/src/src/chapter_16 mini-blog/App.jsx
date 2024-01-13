import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

// Pages
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export default function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />{" "}
        {/* /:postId 처럼 (:)을 사용하고 아이디를 입력하면 useParams() 훅을 사용해 해당 아이디로 값을 가져올 수 있다. */}
      </Routes>
    </BrowserRouter>
  );
}
