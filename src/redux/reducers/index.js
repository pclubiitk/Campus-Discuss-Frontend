// Imports all the required actions
import { AddStream, DelStream, ActiveStream } from "../actions";

// initial state defined for the reducers and selectors
export const initialState = {
  userProfile: {
    name: null,
  },
  streams: [],
  activeStreamId: {},
};

// defining the reducer for the actions imported
export const handleAction = (state = initialState, action) => {
  const { userProfile, streams, activeStreamId } = state;
  switch (action.type) {
    case "ADD_STREAM": {
      const new_stream = {
        id: action.id,
        title: action.title,
        author: action.author,
      };
      let updated_streams = streams;
      updated_streams.push(new_stream);
      const updated_state = { userProfile, updated_streams, activeStreamId };
      return updated_state;
    }
      
    case "DEL_STREAM": {
      const updated_streams = streams.filter((stream) => stream.id !== action.id);
      const updated_state = { userProfile, updated_streams, activeStreamId };
      return updated_state;
    }
      
    
    case "ACTIVE_STREAM": {
      const updated_activeStreamId = action.id;
      const updated_state = { userProfile, streams, updated_activeStreamId };
      return updated_state;
    }
  
    default:
      return state;
  }
};
