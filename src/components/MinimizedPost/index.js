import React from "react";
import "./style.css";

/* Using Material UI */
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    width: "100%",
  },
}));

function MinimizedPost(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card} variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" color="inherit" gutterBottom>
            <b>{props.postTitle}</b>
          </Typography>
          <Typography variant="body1" color="textSecondary">
            by <b>{props.postAuthor}</b>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MinimizedPost;
