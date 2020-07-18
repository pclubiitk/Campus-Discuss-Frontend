// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red, indigo, grey } from "@material-ui/core/colors";

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

type Props = {
  author: string,
  title: string,
  content: string,
};

export default function MaximisedPost(props: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label={props.author} className={classes.avatar}>
            P
          </Avatar>
        }
        title={
          <Typography className={classes.title} variant="h5">
            {props.title}
          </Typography>
        }
        subheader={
          <Typography className={classes.subheader}>{props.author}</Typography>
        }
        className={classes.header}
      />
      <CardMedia
        className={classes.img}
        image="https://miro.medium.com/max/1400/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg"
        title="pclub"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
