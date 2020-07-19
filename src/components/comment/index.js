// @flow

import React, { useRef } from "react";
import "./style.css";
import CommentReplies from "../CommentReplies";

/*  using Material UI   */
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  red,
  orange,
  purple,
  pink,
  green,
  grey,
} from "@material-ui/core/colors";
import ReplyIcon from "@material-ui/icons/Reply";
import CancelIcon from "@material-ui/icons/Cancel";
import Collapse from "@material-ui/core/Collapse";
import TextField from "@material-ui/core/TextField";
import { Toolbar } from "@material-ui/core";
import { type Comment } from "../../types";
import { createComment } from "../../utils/requests";
import { useSnackbar } from "notistack";

const spacing = 60; //It controls spacing between nested comments

const useStyles = makeStyles((theme) => {
  const dark = theme.palette.type === "dark";
  return {
    main: {
      margin: 10,
      maxWidth: "80em", //max width of comment box
    },
    contentShown: { overflowWrap: "break-word" },
    contentHidden: { marginLeft: "1em", flexShrink: "true" },
    authorHidden: {
      marginLeft: "0.5em",
      fontWeight: "bold",
      minWidth: "4em",
      maxWidth: "6em",
    },
    indent: { marginLeft: spacing },
    header: {
      backgroundColor: dark ? grey["700"] : grey["300"],
    },
  };
});

// Generate random color for avatar
const colorArray = [red, orange, purple, pink, green];
const colors = colorArray.flatMap((color) => [
  color["A200"],
  color["A400"],
  color["A700"],
]);

const getRandomColor = () => {
  const randomIdx = Math.floor(Math.random() * colors.length);
  return colors[randomIdx];
};

//returns avatar: image if provided otherwise first letter of author's name
function AvatarProp(props: { author: string }) {
  const bgcolor = useRef(getRandomColor()).current;
  return (
    <Avatar aria-label="comment" style={{ backgroundColor: bgcolor }}>
      {props.author[0].toUpperCase()}
    </Avatar>
  );
}

function ReplyBox(props: {
  onReply: (string) => Promise<void>,
  onClose: () => void,
}) {
  const classes = useStyles(props);
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
            startIcon={<CancelIcon />}
            onClick={props.onClose}
            className={classes.button}
            id="cancelAlign"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ReplyIcon />}
            onClick={() => {
              props.onReply(text);
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

function MaximisedComment(props: {
  comment: Comment,
  onCreateReply: (comment: Comment) => void,
}) {
  const classes = useStyles(props);
  const { enqueueSnackbar } = useSnackbar();
  const [replyOpen, openReply] = React.useState(false);

  const onReply = async (text: string) => {
    try {
      // Handle reply
      const comment = await createComment(text, props.comment.post);
      openReply(false);
      props.onCreateReply && props.onCreateReply(comment);
    } catch (error) {
      enqueueSnackbar("An error occured while posting your comment.", {
        variant: "error",
      });
    }
  };

  return (
    <Card className={classes.main}>
      {/* Comment Header */}
      <CardHeader
        avatar={<AvatarProp author={props.comment.user.name} />}
        title={
          <Typography noWrap>
            <b>{props.comment.user.name}</b>
          </Typography>
        }
        subheader={<i>{props.comment.created_at}</i>}
        className={classes.header}
      />
      {/* Comment Body */}
      <CardContent>
        <Typography
          variant="body1"
          color="textPrimary"
          component="p"
          className={classes.contentShown}
        >
          {props.comment.content}
        </Typography>
      </CardContent>
      {/* Lowermost of Comment */}
      <CardActions disableSpacing>
        {/* Reply button*/}
        <div className="actions">
          <Tooltip aria-label="reply" title="Reply">
            <IconButton aria-label="reply" onClick={() => openReply((a) => !a)}>
              <ReplyIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </div>
      </CardActions>
      <Collapse in={replyOpen} timeout="auto" unmountOnExit>
        <ReplyBox onReply={onReply} onClose={() => openReply(false)} />
      </Collapse>
    </Card>
  );
}

function MinimisedComment(props: { author: string, text: string }) {
  const classes = useStyles(props);
  //minimised comments
  return (
    <Card className={classes.main}>
      <Toolbar>
        <AvatarProp {...props} />
        <Typography variant="body1" className={classes.authorHidden} noWrap>
          {props.author}
        </Typography>
        <Typography
          variant="body2"
          color="textPrimary"
          component="p"
          className={classes.contentHidden}
          noWrap
        >
          {props.text}
        </Typography>
      </Toolbar>
    </Card>
  );
}

const SingleComment = (props: { comment: Comment, showReplies: boolean }) => {
  const classes = useStyles(props);
  const [replies, setReplies] = React.useState(props.comment.replies);

  const createReply = (comment: Comment) => {
    setReplies([...replies, comment]);
  };

  //Handle replies by calling CommentReplies making recursion
  function handleReplies() {
    if (props.showReplies) {
      if (!replies.length) return;
      return (
        <div className={classes.indent}>
          <CommentReplies replies={replies} />
        </div>
      );
    } else {
      return <></>;
    }
  }

  /* It toggles between minimised comments and maximised comments*/
  function handleMainComment() {
    if (props.showReplies) {
      return (
        <MaximisedComment comment={props.comment} onCreateReply={createReply} />
      );
    } else {
      return (
        <MinimisedComment
          author={props.comment.user.name}
          text={props.comment.content}
        />
      );
    }
  }

  return (
    <>
      {handleMainComment()}
      {handleReplies()}
    </>
  );
};

export default SingleComment;
