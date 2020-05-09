//Add action for subscribing the stream
const AddStream = (stream) => {
  return {
    type: AddStream,
    id: stream.id,
    text: stream.name,
  };
};

// Add action for unsubscribing the stream
const DelStream = (stream) => {
  return {
    type: DelStream,
    id: stream.id,
    text: stream.name,
  };
};

// Add action for changing the id of the active stream
const ActiveStream = (stream) => {
  return {
    type: ActiveStream,
    id: stream.id,
    text: stream.name,
  };
};

export { AddStream, DelStream, ActiveStream };
