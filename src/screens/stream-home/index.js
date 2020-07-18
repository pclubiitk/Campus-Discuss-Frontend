// @flow
import * as React from "react";
import { useRouteMatch } from "react-router";
import { useSelector } from "react-redux";
import { streamById } from "../../redux/selectors";
import PostsList from "../../components/stream_screen";
import samplePosts from "../../samples/posts.json";
import Screen from "../screen";

const StreamHome = () => {
  const streamId = useRouteMatch().params.id;
  const stream = useSelector(streamById(parseInt(streamId)));
  if (!stream) return null; // Fix this. Or doesnt matter, maybe

  return (
    <Screen
      title={stream.title}
      renderMain={() => <PostsList postArr={samplePosts} />}
    />
  );
};

export default StreamHome;
