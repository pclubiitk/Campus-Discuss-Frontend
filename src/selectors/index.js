import { createSelector } from "reselect";

// defining selector for list of the subscribed streams
export const subscribedStreams = createSelector((state) => state.streams);

// defining selector for returning the active stream
export const activeStream = createSelector((state) => state.activeStream);

// defining selector for returning the user profile details
export const userProfile = createSelector((state) => state.userProfile);
