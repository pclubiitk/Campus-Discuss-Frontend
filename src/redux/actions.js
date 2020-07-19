// @flow
import { type Stream, type UserData } from "../types";

type SubscribeAction = {
  type: "SUBSCRIBE_STREAM",
  stream: Stream,
};

type UnsubscribeAction = {
  type: "UNSUBSCRIBE_STREAM",
  streamId: number,
};

type LoginAction = {
  type: "LOGIN",
  profile: UserData,
  streams: Array<Stream>,
};

type LogoutAction = {
  type: "LOGOUT",
};

export type Action =
  | SubscribeAction
  | UnsubscribeAction
  | LoginAction
  | LogoutAction;

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

export const Login = (data: {
  profile: UserData,
  streams: Array<Stream>,
}): LoginAction => {
  return {
    type: "LOGIN",
    profile: data.profile,
    streams: data.streams,
  };
};

export const Logout = (): LogoutAction => {
  return {
    type: "LOGOUT",
  };
};
