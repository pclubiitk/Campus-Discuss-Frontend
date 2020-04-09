import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, orange, purple, pink, green } from "@material-ui/core/colors";
import ReplyIcon from "@material-ui/icons/Reply";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import "./style.css";

var flag = 0,
  bgcolor;

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  content: {
    border: "black",
  },
}));

export default function CommentCard(props) {
  const classes = useStyles();
  const [upState, setUpState] = useState("inherit");
  const [downState, setDownState] = useState("inherit");
  const [vote, setVote] = useState(props.userVoted);
  const [upCount, setUpCount] = useState(0);
  const [downCount, setDownCount] = useState(0);

  const handleAvatar = () => {
    switch (Math.floor(Math.random() * 5 + 1)) {
      case 1:
        bgcolor = green[500];
        break;
      case 2:
        bgcolor = pink[500];
        break;
      case 3:
        bgcolor = purple[500];
        break;
      case 4:
        bgcolor = red[500];
        break;
      default:
        bgcolor = orange[500];
    }
  };

  if (flag === 0) {
    handleAvatar();
    flag = 1;
  }

  const addReply = () => {
    console.log("Clicked");
  };

  const handleUpvote = () => {
    if (vote < 1) {
      setVote(1);
      setUpCount(1);
      setUpState("primary");
      setDownCount(0);
      setDownState("inherit");
    } else {
      setVote(0);
      setUpCount(0);
      setUpState("inherit");
    }
  };

  const handleDownvote = () => {
    if (vote >= 0) {
      setVote(-1);
      setUpCount(0);
      setUpState("inherit");
      setDownCount(1);
      setDownState("primary");
    } else {
      setVote(0);
      setDownCount(0);
      setDownState("inherit");
    }
  };

  return (
    <React.Fragment>
      <Card className={classes.main}>
        <div className="header">
          <CardHeader
            avatar={
              <Avatar aria-label="comment" style={{ backgroundColor: bgcolor }}>
                {props.author}
              </Avatar>
            }
            title={<b>{props.author}Kartikeya Gupta</b>}
            subheader={<i>{props.date}9 April, 2020</i>}
          />
        </div>
        <div className="content">
          <CardContent className={classes.content}>
            <Typography variant="body1" color="textPrimary" component="p">
              {props.text} Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </Typography>
          </CardContent>
        </div>
        <CardActions disableSpacing>
          <Typography variant="body1" color="textSecondary" component="p">
            <b>{upCount}</b>
          </Typography>
          <Tooltip title="Upvote" aria-label="upvote">
            <IconButton aria-label="upvote" onClick={handleUpvote}>
              <ThumbUpIcon color={upState} />
            </IconButton>
          </Tooltip>

          <Typography variant="body1" color="textSecondary" component="p">
            <b>{downCount}</b>
          </Typography>
          <Tooltip title="Downvote" aria-label="downvote">
            <IconButton aria-label="downvote" onClick={handleDownvote}>
              <ThumbDownIcon color={downState} />
            </IconButton>
          </Tooltip>
          <div className="actions">
            <Tooltip aria-label="reply" title="Reply">
              <IconButton aria-label="reply" onClick={addReply}>
                <ReplyIcon className={classes.reply} fontSize="large" />
              </IconButton>
            </Tooltip>
          </div>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
