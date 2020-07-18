// @flow
import { type Store, initialState } from "./reducers";

// Selector for list of subscribed streams
export const subscribedStreams = (state: Store = initialState) => state.streams;

// Selector for user profile
export const userProfile = (state: Store = initialState) => state.userProfile;

// Selector for getting stream by ID
export const streamById = (id: number) => (state: Store = initialState) => {
  return state.streams.find((stream) => stream.id === id);
};
