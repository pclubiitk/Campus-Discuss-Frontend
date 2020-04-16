import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red, blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    backgroundColor: "white",
    textAlign: "left",
    justifyContent: "left",
    alignContent: "left",
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    color: "white",
  },
  subheader: {
    color: "white",
  },
  img: {
    height: 500,
  },
}));

export default function MaximisedPost(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{ title: classes.title, subheader: classes.subheader }}
        avatar={
          <Avatar aria-label={props.postAuthor} className={classes.avatar}>
            P
          </Avatar>
        }
        title={props.postTitle}
        subheader={props.postAuthor}
        style={{
          textAlign: "left",
          backgroundColor: "#1565c0",
          color: "white",
        }}
      />
      <CardMedia
        className={classes.img}
        image="https://miro.medium.com/max/1400/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg"
        title="pclub"
      />
      <CardContent>
        <Typography variant="body2" color="black" component="p">
          {props.postData}
        </Typography>
      </CardContent>
    </Card>
  );
}
