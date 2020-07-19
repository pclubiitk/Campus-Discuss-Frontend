// @flow
import * as React from "react";
import { Screen } from "../utils";
import { type Post, type Comment } from "../../types";
import { viewPost, getPostComments } from "../../utils/requests";
import { useRouteMatch } from "react-router";
import { useSnackbar } from "notistack";
import MaximisedPost from "../../components/MaximisedPost";
import CommentsContainer from "../../components/CommentsContainer";
import sampleComments from "../../samples/comments.json";

const ViewPost = (props: { post: Post | null, comments: Comment[] }) => {
  if (!props.post) return null;
  return (
    <>
      <MaximisedPost
        title={props.post.post_title}
        author={props.post.author.name}
        content={props.post.post_text}
      />
      <CommentsContainer postId={props.post.pk} comments={props.comments} />
    </>
  );
};

const ViewPostScreen = () => {
  const { enqueueSnackbar } = useSnackbar();
  const postId = useRouteMatch().params.id;
  const [post, setPost] = React.useState(null);
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        setPost(await viewPost(postId));
        setComments(await getPostComments(postId));
      } catch (error) {
        enqueueSnackbar("An unexpected error occured.", { variant: "error" });
      }
    })();
  }, [postId]);

  return (
    <Screen
      title={post ? post.stream.title : ""}
      renderMain={() => <ViewPost post={post} comments={comments} />}
    />
  );
};

export default ViewPostScreen;
