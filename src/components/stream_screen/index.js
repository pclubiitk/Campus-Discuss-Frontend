// @flow
import React from "react";
import MinimizedPost from "../MinimizedPost/index";

type Post = {
  id: number,
  title: string,
  author: string,
};

export default function StreamScreen(props: { postArr: Post[] }) {
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
