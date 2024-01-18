import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Hello from "./components/Hello";
import Parent from "./components/ContainerSample";
import Page from "./components/ContextSample";
import CounterSample from "./components/CounterSample";
import Counter from "./components/UseReducerSample";
import ParentMemo from "./components/ParentMemo";
import ParentMemo2 from "./components/ParentMemo2";
import UseCallbackSample from "./components/UseCallbackSample";
import UseMemoSample from "./components/UseMemoSample";
import Clock from "./components/Clock";
import UseContextExampleParent from "./components/UseContextExample";
import ImageUpload from "./components/UseRefExample";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<ImageUpload />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
