//Add action for subscribing the stream
export const AddStream = (stream) => {
  return {
    type: "ADD_STREAM",
    id: stream.id,
    text: stream.name,
  };
};

// Add action for unsubscribing the stream
export const DelStream = (stream) => {
  return {
    type: "DEL_STREAM",
    id: stream.id,
    text: stream.name,
  };
};

// Add action for changing the id of the active stream
export const ActiveStream = (stream) => {
  return {
    type: "ACTIVE_STREAM",
    id: stream.id,
    text: stream.name,
  };
};
