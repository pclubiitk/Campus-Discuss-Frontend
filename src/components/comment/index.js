/*
  Props expected are :
  1. author : necessary otherwise gives error.
  2. date
  3. text
  4. baseUpvotes
  5. baseDownvotes
  6. reply
  7. marginLeft
  8. onUpvote
  9. onDownvote
  10. onReply
*/

import React from "react";
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

const spacing = 60;

const useStyles = makeStyles((props, theme) => ({
  main: {
    margin: 10,
    marginLeft: (props) => props.level * spacing,
    maxWidth: "80em",
  },
  content: { overflowWrap: "break-word" },
}));

//Handle replies here
function handleReplies(props) {
  if (!props.reply) {
    return;
  }
  return (
    <CommentReplies
      replies={props.reply}
      level={props.level}
      onUpvote={(id) => props.onUpvote(id)}
      onDownvote={(id) => props.onDownvote(id)}
      onReply={(id) => props.onReply(id)}
    />
  );
}

// Generate random color for avatar
const colors = [red, orange, purple, pink, green];
const getRandomColor = () => {
  const randomIdx = Math.floor(Math.random() * colors.length);
  return colors[randomIdx][500];
};

const Comment = (props) => {
  const classes = useStyles(props);
  const [vote, setVote] = React.useState(props.userVoted);
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const bgcolor = React.useRef(getRandomColor()).current;

  const onReply = (props) => {
    // Handle reply here
    console.log("Reply button clicked!");
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

  const toggleReplyBox = () => {
    // handle reply icon clicked here
    setExpanded(!expanded);
  };
  const handleCancelClose = () => {
    setOpen(false);
    console.log("close " + open);
  };

  const handleCancelOpen = () => {
    setOpen(true);
    console.log("open " + open);
  };

  const replies = handleReplies(props);

  return (
    <>
      <Card className={classes.main}>
        {/* Comment Header */}
        <div className="header">
          <CardHeader
            avatar={
              <Avatar aria-label="comment" style={{ backgroundColor: bgcolor }}>
                {props.author[0].toUpperCase()}
              </Avatar>
            }
            title={<b>{props.author}</b>}
            subheader={<i>{props.date}</i>}
          />
        </div>
        {/* Comment Body */}
        <CardContent>
          <Typography
            variant="body1"
            color="textPrimary"
            component="p"
            className={classes.content}
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
          <Typography variant="body1" color="textSecondary" component="p">
            {props.baseDownvotes + (vote === -1 ? 1 : 0)}
          </Typography>
          {/* Reply button*/}
          <div className="actions">
            <Tooltip aria-label="reply" title="Reply">
              <IconButton
                aria-label="reply"
                onClick={() => {
                  toggleReplyBox();
                  onReply(props);
                }}
              >
                <ReplyIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <div id="text-box">
            <TextField
              aria-label="empty textarea for reply"
              rowsMin={3}
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
                positive
                variant="contained"
                color="primary"
                startIcon={<ReplyIcon />}
                onClick={() => {
                  onReply();
                  toggleReplyBox();
                }}
                id="replyalign"
              >
                Reply
              </Button>
              <Dialog
                open={open}
                onClose={handleCancelClose}
                aria-labelledby="draggable-dialog-title"
              >
                <DialogContent>
                  <DialogContentText>
                    Are you sure you want to discard the reply?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleCancelClose} color="primary">
                    No
                  </Button>
                  <Button
                    onClick={() => {
                      handleCancelClose();
                      toggleReplyBox();
                    }}
                    color="primary"
                  >
                    Yes
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </CardActions>
        </Collapse>
      </Card>
      {replies}
    </>
  );
};

export default Comment;
