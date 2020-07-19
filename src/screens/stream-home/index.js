// @flow
import * as React from "react";
import { useSnackbar } from "notistack";
import { useRouteMatch } from "react-router";
import { useSelector } from "react-redux";
import { streamById } from "../../redux/selectors";
import PostsList from "../../components/stream_screen";
import samplePosts from "../../samples/posts.json";
import { getPostsByStream } from "../../utils/requests";
import { Screen } from "../utils";

const StreamHome = () => {
  const streamId = useRouteMatch().params.id;
  console.log(streamId);
  const [posts, setPosts] = React.useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const stream = useSelector(streamById(parseInt(streamId)));

  React.useEffect(() => {
    (async () => {
      try {
        setPosts(await getPostsByStream(streamId));
      } catch (error) {
        enqueueSnackbar("An error occured while getting stream posts.", {
          variant: "error",
        });
      }
    })();
  }, [streamId, enqueueSnackbar]);

  if (!stream) return <p>Helo</p>; // Fix this. Or doesnt matter, maybe

  return (
    <Screen
      title={stream.title}
      renderMain={() => <PostsList postArr={posts} />}
    />
  );
};

export default StreamHome;
