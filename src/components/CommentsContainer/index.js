// @flow
import React, { useState } from "react";
import Comment from "../comment";
import sampleComments from "../../samples/comments.json";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ReplyIcon from "@material-ui/icons/Reply";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import { createComment } from "../../utils/requests";
import { type UserData, type Comment as CommentType } from "../../types";

type Props = {
  comments?: CommentType[],
  postId: number,
};

function ReplyBox(props: { onReply: (string) => Promise<void> }) {
  const [text, setText] = React.useState("");

  return (
    <>
      <div id="text-box">
        <TextField
          aria-label="empty textarea for reply"
          rowsMax={6}
          placeholder="Reply"
          multiline
          value={text}
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
          id="textbox"
        />
      </div>
      <CardActions>
        <div className="actions">
          <Button
            variant="contained"
            color="primary"
            startIcon={<ReplyIcon />}
            onClick={() => {
              props.onReply(text);
              setText("");
            }}
            id="replyalign"
          >
            Reply
          </Button>
        </div>
      </CardActions>
    </>
  );
}

function CommentsContainer(props: Props) {
  const [comments, setComments] = useState(props.comments);
  const { enqueueSnackbar } = useSnackbar();

  const createReply = async (text: string) => {
    try {
      const comment = await createComment(text, props.postId);
      setComments([...comments, comment]);
    } catch (err) {
      enqueueSnackbar("An error occured while posting your comment", {
        variant: "error",
      });
    }
  };

  return (
    <>
      <ReplyBox onReply={(text) => createReply(text)} />
      {comments.map<React$Node>((comment) => (
        <Comment key={comment.pk} comment={comment} showReplies={true} />
      ))}
    </>
  );
}

export default CommentsContainer;
