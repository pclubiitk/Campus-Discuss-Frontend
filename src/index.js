import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Home from "./components/sidebar";

const name = "John Doe";
const streams = [
  "Stream1",
  "Stream Two",
  "This is a long stream name",
  "That Stream",
];
ReactDOM.render(
  <React.StrictMode>
    <Home name={name} streams={streams} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
