// @flow
import * as Types from "../types";
import * as Actions from "./actions";
import subbedStreams from "../samples/streams.json";
import sampleProfile from "../samples/profile.json";

export type Store = {|
  userProfile: Types.UserData,
  streams: Array<Types.Stream>,
|};

// initial state defined for the reducers and selectors
export const initialState: Store = {
  userProfile: sampleProfile,
  streams: subbedStreams,
};

// defining the reducer for the actions imported
export const handleAction = (
  state: Store = initialState,
  action: Actions.Action
) => {
  switch (action.type) {
    case "SUBSCRIBE_STREAM": {
      state.streams.forEach((stream) => {
        if (stream.id === action.stream.id) return state;
      });
      const new_streams = [...state.streams];
      new_streams.push(action.stream);
      return { ...state, streams: new_streams };
    }

    case "UNSUBSCRIBE_STREAM": {
      const new_streams: Array<Types.Stream> = state.streams.filter(
        (stream) => stream.id !== action.streamId
      );
      return { ...state, streams: new_streams };
    }

    default:
      return state;
  }
};
