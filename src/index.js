import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Streams from "../src/screens/subscribe-streams/index";
import * as serviceWorker from "./serviceWorker";

const onSubscribe = (id) => {
  alert("Subsribe clicked!  " + id);
};
const onOpen = (id) => {
  alert("Open the stream  " + id);
};
const subscribed = [false, true, true, false];

ReactDOM.render(
  <React.StrictMode>
    <Streams
      onOpen={onOpen}
      onSubscribe={onSubscribe}
      subscribed={subscribed}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
