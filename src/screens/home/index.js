// @flow
import * as React from "react";
import { useSnackbar } from "notistack";
import { Screen } from "../utils";
import { getUserFeed } from "../../utils/requests";
import PostsList from "../../components/stream_screen";
import samplePosts from "../../samples/posts.json";

const HomeScreen = () => {
  const [posts, setPosts] = React.useState(samplePosts);
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    (async () => {
      try {
        const feed = await getUserFeed();
        setPosts(feed);
      } catch (err) {
        enqueueSnackbar("An error occured while fetching your feed.", {
          variant: "error",
        });
      }
    })();
  }, []);

  return (
    <Screen
      title={"Your Feed"}
      renderMain={() => <PostsList postArr={posts} />}
    />
  );
};

export default HomeScreen;
