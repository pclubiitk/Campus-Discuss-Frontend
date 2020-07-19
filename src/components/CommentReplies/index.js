// @flow
import React, { useState } from "react";
import Comment from "../comment";
import { Collapse, CardActionArea } from "@material-ui/core";
import { type Comment as CommentType } from "../../types";

const maxViewableComments = 3;

type Props = {
  replies: CommentType[],
};

function CommentReplies(props: Props) {
  const [showComments, setShowComments] = useState(false);

  //comments viewable in minimised form
  const visibleComments = props.replies
    .slice(0, maxViewableComments)
    .map((reply) => (
      <Comment comment={reply} showReplies={showComments} key={reply.pk} />
    ));

  //comments which were hidden
  const hiddenComments = props.replies
    .slice(maxViewableComments)
    .map((reply) => (
      <Comment comment={reply} key={reply.pk} showReplies={showComments} />
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
