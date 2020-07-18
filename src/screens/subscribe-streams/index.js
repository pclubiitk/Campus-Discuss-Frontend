// @flow
import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import allStreams from "../../samples/all-streams.json";
import Screen from "../screen";
import "./style.css";

const SubscribeButton = (props: {
  subscribed: boolean,
  onSubscribe: () => void,
}) => {
  return props.subscribed ? null : (
    <Button
      color="primary"
      onClick={(event) => {
        event.stopPropagation();
        props.onSubscribe();
      }}
    >
      Subscribe
    </Button>
  );
};

const Streams = () => {
  return (
    <>
      {allStreams.map((stream) => {
        return (
          <Card variant="outlined" key={stream.id} onClick={() => {}}>
            <CardHeader
              title={stream.name}
              subheader={stream.followers + " followers"}
              action={
                <SubscribeButton
                  subscribed={stream.subscribed}
                  onSubscribe={() => {}}
                />
              }
            ></CardHeader>
            <CardContent className="content">
              <Typography variant="body2"> {stream.description} </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

const StreamsScreen = () => {
  return <Screen title="All streams" renderMain={() => <Streams />} />;
};

export default StreamsScreen;
