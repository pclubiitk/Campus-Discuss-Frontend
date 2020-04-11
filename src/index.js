import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Comment from "./components/comment/index";
import * as serviceWorker from "./serviceWorker";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
ReactDOM.render(
  <React.StrictMode>
    <Comment
      author={"John Doe"}
      text={text}
      baseUpvotes={5}
      baseDownvotes={7}
      date={"06/08/20"}
      userVoted={1}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
