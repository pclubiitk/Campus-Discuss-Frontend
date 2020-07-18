// @flow
import React, { useState } from "react";
import Comment from "../comment";
import { Collapse, CardActionArea } from "@material-ui/core";
import { type CommentType } from "../CommentsContainer";

const maxViewableComments = 3;

type Props = {
  userVoted: boolean,
  replies: CommentType[],
  onUpvote: (id: number) => void,
  onDownvote: (id: number) => void,
  onReply: (id: number) => void,
  openReplyBox: (id: number) => void,
  setOpenReplyBoxId: (id: ?number) => void,
};

function CommentReplies(props: Props) {
  const [showComments, setShowComments] = useState(false);

  //comments viewable in minimised form
  const visibleComments = props.replies
    .slice(0, maxViewableComments)
    .map((reply) => (
      <Comment
        key={reply.id}
        {...reply}
        userVoted={props.userVoted}
        onUpvote={(id) => props.onUpvote(id)}
        onDownvote={(id) => props.onDownvote(id)}
        onReply={(id) => props.onReply(id)}
        showReplies={showComments}
        openReplyBox={(id) => props.openReplyBox(id)}
        setOpenReplyBoxId={(id) => props.setOpenReplyBoxId(id)}
      />
    ));

  //comments which were hidden
  const hiddenComments = props.replies
    .slice(maxViewableComments)
    .map((reply) => (
      <Comment
        key={reply.id}
        {...reply}
        userVoted={props.userVoted}
        onUpvote={(id) => props.onUpvote(id)}
        onDownvote={(id) => props.onDownvote(id)}
        onReply={(id) => props.onReply(id)}
        showReplies={showComments}
        openReplyBox={(id) => props.openReplyBox(id)}
        setOpenReplyBoxId={(id) => props.setOpenReplyBoxId(id)}
      />
    ));

  return (
    <>
      {showComments ? (
        visibleComments
      ) : (
        <CardActionArea onClick={() => setShowComments(true)}>
          {visibleComments}
        </CardActionArea>
      )}
      <Collapse in={showComments} timeout="auto" unmountOnExit>
        {hiddenComments}
      </Collapse>
    </>
  );
}

export default CommentReplies;
