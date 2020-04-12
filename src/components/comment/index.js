/*
  Props expected are :
  1. id
  2. author : necessary otherwise gives error.
  3. date
  4. text
  5. DP: address of profile picture
  6. baseUpvotes
  7. baseDownvotes
  8. replies
  9. onUpvote
  10. onDownvote
  11. onReply
  12. showReplies
  13. openReplyBoxId
  14. openReplyBox
*/

import React, { useState, useRef } from "react";
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
import { red, orange, purple, pink, green } from "@material-ui/core/colors";
import ReplyIcon from "@material-ui/icons/Reply";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import CancelIcon from "@material-ui/icons/Cancel";
import Collapse from "@material-ui/core/Collapse";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Toolbar } from "@material-ui/core";

const spacing = 60; //It controls spacing between nested comments

const useStyles = makeStyles((theme) => ({
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
}));

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
function AvatarProp(props) {
  const bgcolor = useRef(getRandomColor()).current;
  if (!props.DP) {
    return (
      <Avatar aria-label="comment" style={{ backgroundColor: bgcolor }}>
        {props.author[0].toUpperCase()}
      </Avatar>
    );
  } else
    return (
      <Avatar
        aria-label="comment"
        style={{ backgroundColor: bgcolor }}
        alt={props.author[0].toUpperCase()}
        src={props.DP}
      />
    );
}

function DialogBox(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleCancelClose}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogContent>
        <DialogContentText>
          Are you sure you want to discard the reply?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={props.handleCancelClose} color="primary">
          No
        </Button>
        <Button
          onClick={() => {
            props.setOpenReplyBoxId(null);
            props.handleCancelClose();
          }}
          color="primary"
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function ReplyBox(props) {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);

  const handleCancelClose = () => {
    setOpen(false);
  };

  const handleCancelOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div id="text-box">
        <TextField
          aria-label="empty textarea for reply"
          rowsMax={6}
          placeholder="Reply"
          multiline
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
            onClick={handleCancelOpen}
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
              props.onReply();
            }}
            id="replyalign"
          >
            Reply
          </Button>
          <DialogBox
            {...props}
            open={open}
            handleCancelClose={() => handleCancelClose()}
          />
        </div>
      </CardActions>
    </>
  );
}

function MaximisedComment(props) {
  const classes = useStyles(props);
  const [vote, setVote] = useState(props.userVoted);

  const onReply = (props) => {
    // Handle reply button here
    props.setOpenReplyBoxId("null");
    props.onReply(props.id);
  };

  const onUpvote = (props) => {
    // Handle upvote here
    setVote(vote === 1 ? 0 : 1);
    props.onUpvote(props.id);
  };

  const onDownvote = (props) => {
    // Handle downvote here
    setVote(vote === -1 ? 0 : -1);
    props.onDownvote(props.id);
  };

  return (
    <Card className={classes.main}>
      {/* Comment Header */}
      <div className="header">
        <CardHeader
          avatar={<AvatarProp {...props} />}
          title={
            <Typography noWrap>
              <b>{props.author}</b>
            </Typography>
          }
          subheader={<i>{props.date}</i>}
        />
      </div>
      {/* Comment Body */}
      <CardContent>
        <Typography
          variant="body1"
          color="textPrimary"
          component="p"
          className={classes.contentShown}
        >
          {props.text}
        </Typography>
      </CardContent>

      {/* Lowermost of Comment */}
      <CardActions disableSpacing>
        {/* Up Vote Icon */}
        <Tooltip title="Upvote" aria-label="upvote">
          <IconButton aria-label="upvote" onClick={() => onUpvote(props)}>
            <ThumbUpIcon color={vote === 1 ? "primary" : "inherit"} />
          </IconButton>
        </Tooltip>
        {/* Up Vote Count */}
        <Typography variant="body2" color="textSecondary" component="p">
          {props.baseUpvotes + (vote === 1 ? 1 : 0)}
        </Typography>
        {/* Down Vote Icon */}
        <Tooltip title="Downvote" aria-label="downvote">
          <IconButton aria-label="downvote" onClick={() => onDownvote(props)}>
            <ThumbDownIcon color={vote === -1 ? "primary" : "inherit"} />
          </IconButton>
        </Tooltip>
        {/* Down Vote Count */}
        <Typography variant="body2" color="textSecondary" component="p">
          {props.baseDownvotes + (vote === -1 ? 1 : 0)}
        </Typography>
        {/* Reply button*/}
        <div className="actions">
          <Tooltip aria-label="reply" title="Reply">
            <IconButton
              aria-label="reply"
              onClick={() => {
                props.setOpenReplyBoxId(props.id);
              }}
            >
              <ReplyIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </div>
      </CardActions>
      <Collapse in={props.openReplyBox(props.id)} timeout="auto" unmountOnExit>
        <ReplyBox {...props} onReply={() => onReply(props)} />
      </Collapse>
    </Card>
  );
}

function MinimisedComment(props) {
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

const Comment = (props) => {
  const classes = useStyles(props);

  //Handle replies by calling CommentReplies making recursion
  function handleReplies() {
    if (props.showReplies) {
      if (!props.replies) {
        return;
      }
      return (
        <div className={classes.indent}>
          <CommentReplies
            replies={props.replies}
            onUpvote={(id) => props.onUpvote(id)}
            onDownvote={(id) => props.onDownvote(id)}
            onReply={(id) => props.onReply(id)}
            setOpenReplyBoxId={(id) => props.setOpenReplyBoxId(id)}
            openReplyBox={(id) => props.openReplyBox(id)}
          />
        </div>
      );
    } else {
      return <></>;
    }
  }

  /* It toggles between minimised comments and maximised comments*/
  function handleMainComment() {
    if (props.showReplies) {
      return <MaximisedComment {...props} />;
    } else {
      return <MinimisedComment {...props} />;
    }
  }

  const replies = handleReplies();
  const mainComment = handleMainComment();

  return (
    <>
      {mainComment}
      {replies}
    </>
  );
};

export default Comment;
