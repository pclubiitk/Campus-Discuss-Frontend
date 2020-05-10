// Imports all the required actions
import { AddStream, DelStream, ActiveStream } from "../actions";

// initial state defined for the reducers and selectors
export const initialState = {
  userProfile: {
    name: null,
  },
  streams: [],
  activeStream: {},
};

// defining the reducer for the actions imported
export const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STREAM":
      return Object.assign({}, state, {
        streams: [
          ...state.streams,
          {
            id: action.id,
            title: action.title,
            author: action.author,
          },
        ],
      });

    case "DEL_STREAM":
      return {
        userProfile: { ...state.userProfile },
        streams: [...state.streams.filter((stream) => stream.id !== action.id)],
        activeStream: { ...state.activeStream },
      };

    case "ACTIVE_STREAM":
      return Object.assign({}, state, {
        activeStream: [
          ...state.activeStream,
          {
            id: action.id,
            title: action.title,
            author: action.author,
          },
        ],
      });

    default:
      return state;
  }
};
