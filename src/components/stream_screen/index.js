// @flow
import React from "react";
import { type Post } from "../../types";
import MinimizedPost from "../MinimizedPost/index";

export default function StreamScreen(props: { postArr: Post[] }) {
  return (
    <div align="left">
      {props.postArr.map((post) => (
        <MinimizedPost key={post._id} post={post} />
      ))}{" "}
    </div>
  );
}
