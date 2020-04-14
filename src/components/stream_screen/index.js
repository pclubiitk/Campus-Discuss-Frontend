import React from "react";
import MinimizedPost from "../MinimizedPost/index";

export default function StreamScreen(props) {
  return (
    <div align="left">
      {props.postArr.map((post) => (
        <MinimizedPost
          key={post.id}
          postTitle={post.title}
          postAuthor={post.author}
        />
      ))}{" "}
    </div>
  );
}
