import { createSelector } from "reselect";
import { handleAction, initialState } from "../reducers";

// defining selector for list of the subscribed streams
export const subscribedStreams = createSelector(
  (state = initialState) => state.streams
);

// defining selector for returning the active stream
export const activeStream = createSelector(
  (state = initialState) => {
    for (let i = 0; i < state.streams.length; i++){
      if (state.streams[i].id === state.activeStreamId) {
        return state.streams[i];
      }
    }
  }
);

// defining selector for returning the user profile details
export const userProfile = createSelector(
  (state = initialState) => state.userProfile
);
