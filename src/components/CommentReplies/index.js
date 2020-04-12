/*
    Props expected are :
    1. replies
    2. onUpvote
    3. onDownvote
    4. onReply
    5. setOpenReplyBoxId
    6. openReplyBox
*/

import React, { useState } from "react";
import Comment from "../comment";
import { Collapse, CardActionArea } from "@material-ui/core";

const maxViewableComments = 3;

function CommentReplies(props) {
  const [showComments, setShowComments] = useState(false);

  //comments viewable in minimised form
  const visibleComments = props.replies
    .slice(0, maxViewableComments)
    .map((reply) => (
      <Comment
        key={reply.id}
        {...reply}
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
