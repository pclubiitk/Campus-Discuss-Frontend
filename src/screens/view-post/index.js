// @flow
import * as React from "react";
import { Screen } from "../utils";
import { type Post } from "../../types";
import { viewPost } from "../../utils/requests";
import { useRouteMatch } from "react-router";
import { useSnackbar } from "notistack";
import MaximisedPost from "../../components/MaximisedPost";
import CommentsContainer from "../../components/CommentsContainer";

const ViewPost = (props: { post: Post | null }) => {
  if (!props.post) return null;
  return (
    <>
      <MaximisedPost
        title={props.post.post_title}
        author={props.post.author.name}
        content={props.post.post_text}
      />
      <CommentsContainer />
    </>
  );
};

const ViewPostScreen = () => {
  const { enqueueSnackbar } = useSnackbar();
  const postId = useRouteMatch().params.id;
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        setPost(await viewPost(postId));
      } catch (error) {
        enqueueSnackbar("Could not fetch post.", { variant: "error" });
      }
    })();
  }, []);

  return (
    <Screen
      title={post ? post.stream.title : ""}
      renderMain={() => <ViewPost post={post} />}
    />
  );
};

export default ViewPostScreen;