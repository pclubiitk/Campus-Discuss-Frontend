/*
    Props expected are :
    1. replies
    2. level
    3. onUpvote
    4. onDownvote
    5. onReply
*/

import React, { useState } from "react";
import Comment from "../comment";
import { Collapse, Button } from "@material-ui/core";

function CommentReplies(props) {
  const level = props.level + 1;

  return props.replies.map((reply) => (
    <Comment
      {...reply}
      level={level}
      onUpvote={(id) => props.onUpvote(id)}
      onDownvote={(id) => props.onDownvote(id)}
      onReply={(id) => props.onReply(id)}
    />
  ));
}

export default CommentReplies;
