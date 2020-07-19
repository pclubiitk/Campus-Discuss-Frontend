// @flow
import * as Types from "../types";
import axios from "axios";
const base_url = "http://localhost:8000";

// const sendRequest = async (url, method, body, headers = {}) => {
//   console.log(body);
//   const response = await fetch(base_url + url, {
//     method,
//     // $FlowFixMe
//     body,
//     headers,
//   });
//   const responseData = await response.json();
//   if (!response.ok) throw new Error(responseData.status);
//   return responseData;
// };

const sendRequest = async (url, method, body, headers = {}) => {
  const response = await axios({
    method,
    url: base_url + url,
    data: body,
    headers,
  });
  console.log(response);
  return response.data;
};

// Setup redux state
export const getAppState = async () => {
  const profile = await getProfile();
  const streams = await getSubbedStreams();
  return { profile, streams };
};

// Login
export const login = async (username: string, password: string) => {
  await sendRequest("/users/auth/login/", "POST", {
    username,
    password,
  });
};

// Logout
export const logout = async () => {
  const res = await sendRequest("/users/auth/logout/", "POST", {});
  return res;
};

// Get user feed
export const getUserFeed = async (): Promise<Array<Types.Post>> => {
  const res = await sendRequest("/users/feed/", "GET");
  return res;
};

// Get profile
export const getProfile = async (): Promise<Types.UserData> => {
  const res = await sendRequest("/users/profile/", "GET");
  return res;
};

// Get subscribed streams
export const getSubbedStreams = async (): Promise<Array<Types.Stream>> => {
  const res = await sendRequest("/streams/subbed/");
  return res;
};

// Get posts by stream
export const getPostsByStream = async (
  streamId: number
): Promise<Array<Types.Post>> => {
  const res = await sendRequest(`/streams/${streamId}/posts/`, "GET");
  return res.post_set;
};

// Create post
export const createPost = async (
  title: string,
  text: string,
  stream: string
) => {
  const res = await sendRequest("/posts/create/", "POST", {
    title,
    text,
    stream,
  });
  return res;
};

// Get post comments
export const getPostComments = async (postId: number) => {
  const res = await sendRequest(`/comments/view/${postId}`, "GET");
  return res;
};

// Reply to comment
export const createComment = async (
  content: string,
  postId: number,
  commentId?: number
) => {
  const res = await sendRequest("/comments/create", "POST", {
    content,
    post_id: postId,
    parent_id: commentId,
  });
  return res;
};

// Subscribe to stream
export const subscribeToStream = async (pk: string) => {
  const res = await sendRequest("/streams/follow/", "PUT", { pk });
  return res;
};

// Unsubscribe from stream
export const unsubscribeFromStream = async (pk: string) => {
  const res = await sendRequest("/streams/unfollow/", "DELETE", { pk });
  return res;
};

// Delete post
export const deletePost = async (postId: number) => {
  const res = await sendRequest("/posts/delete/", "DELETE", { postId });
  return res;
};

// Fetch posts of user
export const fetchPostsbyUser = async (
  userId: number
): Promise<Array<Types.Post>> => {
  const res = await sendRequest(`/users/${userId}/posts/`, "GET");
  return res;
};

// View Post
export const viewPost = async (postId: number) => {
  const res = await sendRequest(`/posts/view/${postId}/`, "GET");
  return res;
};

// Get all Streams
export const getAllStreams = async (): Promise<Array<Types.Stream>> => {
  const res = await sendRequest("/streams/all/");
  return res;
};
