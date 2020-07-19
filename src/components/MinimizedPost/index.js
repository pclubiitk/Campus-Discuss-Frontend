// @flow
import React from "react";
import { type Post } from "../../types";
import { useHistory } from "react-router";
import { Card, CardHeader } from "@material-ui/core";
import { makeStyles, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    width: "100%",
    transition: "all 0.15s ease-in-out",
    "&:hover": {
      background: "rgba(128, 128, 128, 0.1)",
    },
  },
}));

type Props = {
  post: Post,
};

const MinimizedPost = (props: Props) => {
  const { post } = props;
  const history = useHistory();
  const classes = useStyles();
  return (
    <Card
      className={classes.card}
      variant="outlined"
      onClick={() => history.push(`/post/${post.pk}`)}
    >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {post.author.name}
          </Avatar>
        }
        title={post.post_title}
        subheader={`${post.author.name} ￮ ${post.pub_date}`}
      />
    </Card>
  );
};

export default MinimizedPost;
