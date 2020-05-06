import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red, indigo, grey, blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => {
  const dark = theme.palette.type === "dark";
  return {
    card: {
      width: "100%",
      textAlign: "left",
      justifyContent: "left",
      alignContent: "left",
    },
    avatar: {
      backgroundColor: red[500],
    },
    title: { color: dark ? indigo["100"] : grey["50"] },
    subheader: { color: dark ? indigo["300"] : grey["500"] },
    img: {
      height: 500,
    },
    header: {
      textAlign: "left",
      backgroundColor: dark ? indigo["900"] : indigo["700"],
    },
  };
});

export default function MaximisedPost(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label={props.postAuthor} className={classes.avatar}>
            P
          </Avatar>
        }
        title={
          <Typography className={classes.title} variant="h5">
            {props.postTitle}
          </Typography>
        }
        subheader={
          <Typography className={classes.subheader}>
            {props.postAuthor}
          </Typography>
        }
        className={classes.header}
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
