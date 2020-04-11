import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, orange, purple, pink, green } from '@material-ui/core/colors';
import ReplyIcon from '@material-ui/icons/Reply';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import './style.css';

const useStyles = makeStyles((theme) => ({
  main: {
    margin: 10,
    border: '1px solid #dddf',
  },
}));

// Generate random color for avatar
const colors = [red, orange, purple, pink, green];
const getRandomColor = () => {
  const randomIdx = Math.floor(Math.random() * colors.length);
  return colors[randomIdx][500];
};

const Comment = (props) => {
  const classes = useStyles();
  const [vote, setVote] = React.useState(props.userVoted);
  const bgcolor = React.useRef(getRandomColor()).current;

  const onReply = () => {
    // Handle reply here
    console.log('Reply button clicked!');
  };

  const onUpvote = () => {
    // Handle upvote here
    setVote(vote === 1 ? 0 : 1);
  };

  const onDownvote = () => {
    // Handle downvote here
    setVote(vote === -1 ? 0 : -1);
  };

  return (
    <Card className={classes.main}>
      <div className="header">
        <CardHeader
          avatar={
            <Avatar aria-label="comment" style={{ backgroundColor: bgcolor }}>
              {props.author}
            </Avatar>
          }
          title={<b>{props.author}</b>}
          subheader={<i>{props.date}</i>}
        />
      </div>
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Upvote" aria-label="upvote">
          <IconButton aria-label="upvote" onClick={onUpvote}>
            <ThumbUpIcon color={vote === 1 ? 'primary' : 'inherit'} />
          </IconButton>
        </Tooltip>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.baseUpvotes + (vote === 1 ? 1 : 0)}
        </Typography>
        <Tooltip title="Downvote" aria-label="downvote">
          <IconButton aria-label="downvote" onClick={onDownvote}>
            <ThumbDownIcon color={vote === -1 ? 'primary' : 'inherit'} />
          </IconButton>
        </Tooltip>
        <Typography variant="body1" color="textSecondary" component="p">
          {props.baseDownvotes + (vote === -1 ? 1 : 0)}
        </Typography>
        <div className="actions">
          <Tooltip aria-label="reply" title="Reply">
            <IconButton aria-label="reply" onClick={onReply}>
              <ReplyIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </div>
      </CardActions>
    </Card>
  );
};

export default Comment;
