// @flow
import { type Stream } from "../types";

type SubscribeAction = {
  type: "SUBSCRIBE_STREAM",
  stream: Stream,
};

type UnsubscribeAction = {
  type: "UNSUBSCRIBE_STREAM",
  streamId: number,
};

export type Action = SubscribeAction | UnsubscribeAction;

// Subscribe to a stream
export const SubscribeStream = (stream: Stream): SubscribeAction => {
  return {
    type: "SUBSCRIBE_STREAM",
    stream,
  };
};

//Unsubscribe to a stream
export const UnsubscribeStream = (streamId: number): UnsubscribeAction => {
  return {
    type: "UNSUBSCRIBE_STREAM",
    streamId,
  };
};
