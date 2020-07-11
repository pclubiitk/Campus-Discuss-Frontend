import { createSelector } from "reselect";
import { handleAction, initialState } from "../reducers";

// defining selector for list of the subscribed streams
export const subscribedStreams = createSelector(
  (state = initialState) => state.streams
);

// defining selector for returning the active stream
export const activeStreamId = createSelector(
  (state = initialState) => state.activeStreamId
);

// defining selector for returning the user profile details
export const userProfile = createSelector(
  (state = initialState) => state.userProfile
);
