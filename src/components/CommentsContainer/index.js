// @flow
import React, { useState } from "react";
import Comment from "../comment";
import sampleComments from "../../samples/comments.json";

export type CommentType = {|
  id: number,
  author: string,
  date: string,
  text: string,
  DP?: string,
  baseUpvotes: number,
  baseDownvotes: number,
  replies?: CommentType[],
|};

function onUpvote(id) {
  console.log("comment " + id + ": was upvoted");
}

function onDownvote(id) {
  console.log("comment " + id + ": was downvoted");
}

function onReply(id) {
  console.log("comment " + id + ": was asked to be replied");
}

type Props = {
  comments?: CommentType[],
};

function CommentsContainer(props: Props) {
  const [openReplyBoxId, setOpenReplyBoxId] = useState(null);
  const comments = props.comments || sampleComments;

  function openReplyBox(id) {
    if (openReplyBoxId === null) return false;
    if (id === openReplyBoxId) {
      return true;
    } else {
      return false;
    }
  }

  return comments.map<React$Node>((comment) => (
    <Comment
      key={comment.id}
      {...comment}
      userVoted={true} // TODO: Fix this
      onUpvote={(id) => onUpvote(id)}
      onDownvote={(id) => onDownvote(id)}
      onReply={(id) => onReply(id)}
      showReplies={true}
      setOpenReplyBoxId={setOpenReplyBoxId}
      openReplyBox={(id) => {
        openReplyBox(id);
      }}
    />
  ));
}

export default CommentsContainer;
