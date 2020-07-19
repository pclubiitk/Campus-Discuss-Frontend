// @flow
import React from "react";
import { type Stream } from "../../types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import allStreams from "../../samples/all-streams.json";
import {
  getAllStreams,
  subscribeToStream,
  unsubscribeFromStream,
} from "../../utils/requests";
import { useDispatch } from "react-redux";
import { SubscribeStream, UnsubscribeStream } from "../../redux/actions";
import { Screen } from "../utils";
import { useSnackbar } from "notistack";
import "./style.css";

const SubscribeButton = (props: {
  subscribed: boolean,
  onSubscribe: () => Promise<void>,
  onUnsubscribe: () => Promise<void>,
}) => {
  return (
    <Button
      color="primary"
      onClick={(event) => {
        event.stopPropagation();
        props.subscribed ? props.onUnsubscribe() : props.onSubscribe();
      }}
    >
      {props.subscribed ? "Unsubscribe" : "Subscribe"}
    </Button>
  );
};

const Streams = () => {
  const [allStreams, setAllStreams] = React.useState([]);
  const [count, setCount] = React.useState(0); // For force updating
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        const streams = await getAllStreams();
        setAllStreams(streams);
      } catch (error) {
        enqueueSnackbar("Could not get list of streams.", { variant: "error" });
      }
    })();
  }, []);

  const subscribeTo = async (stream: Stream) => {
    await subscribeToStream(stream.pk);
    dispatch(SubscribeStream(stream));
    stream.is_subscribed = true;
    setCount((c) => ++c);
  };

  const unsubscribeFrom = async (stream: Stream) => {
    await unsubscribeFromStream(stream.pk);
    dispatch(UnsubscribeStream(stream.pk));
    stream.is_subscribed = false;
    setCount((c) => ++c);
  };

  return (
    <>
      {allStreams.map((stream) => {
        return (
          <Card variant="outlined" key={stream.pk} onClick={() => {}}>
            <CardHeader
              title={stream.title}
              // subheader={stream.followed_by + " followers"}
              action={
                <SubscribeButton
                  subscribed={stream.is_subscribed}
                  onSubscribe={() => subscribeTo(stream)}
                  onUnsubscribe={() => unsubscribeFrom(stream)}
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