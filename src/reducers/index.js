// Imports all the required actions
import { AddStream, DelStream, ActiveStream } from "../actions";

// defining the reducer for the actions imported
const handleAction = (state, action) => {
  switch (action.type) {
    case AddStream:
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

    case DelStream:
      return {
        streams: [...state.streams.filter((stream) => stream.id !== action.id)],
      };

    case ActiveStream:
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

export default handleAction;
