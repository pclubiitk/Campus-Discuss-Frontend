import React from "react";
import MinimizedPost from "./minimizedpost";

export default function StreamScreen(props) {
  var posts = [];
  for (let i = 0; i < props.postArr.length; i++) {
    posts.push(
      <MinimizedPost
        key={props.postArr[i].id}
        postTitle={props.postArr[i].title}
        postAuthor={props.postArr[i].author}
      />
    );
  }
  return <div>{posts}</div>;
}
