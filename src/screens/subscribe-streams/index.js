import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./style.css";

import Data from "./Streams.json";

const useStyles = makeStyles({
  subscribe: {
    top: "50%",
    alignItems: "center",
  },
});

function subButton(sub, subStyle, onSubscribe, title) {
  if (!sub)
    return (
      <Button
        color="primary"
        onClick={(event) => {
          event.stopPropagation();
          onSubscribe(title);
        }}
      >
        Subscribe
      </Button>
    );
}

function Streams(props) {
  const classes = useStyles();
  const newdata = Data.map((data, i) => {
    return (
      <Card
        variant="outlined"
        key={data.id}
        onClick={() => props.onOpen(data.id)}
      >
        <CardHeader
          title={data.title}
          subheader={data.followers + " followers"}
          subheaderTypographyProps='variant = "overline"'
          action={subButton(
            props.subscribed[i],
            classes.subscribe,
            props.onSubscribe,
            data.id
          )}
        ></CardHeader>
        <CardContent className={"content"}>
          <Typography variant="body2"> {data.description} </Typography>
        </CardContent>
      </Card>
    );
  });
  return <div>{newdata}</div>;
}

export default Streams;
