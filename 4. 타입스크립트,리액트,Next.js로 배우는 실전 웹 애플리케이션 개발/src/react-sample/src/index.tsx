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
import ParentMemo from "./components/Parent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ParentMemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
