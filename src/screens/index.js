import React from "react";

//exporting screens from this folder.
import Login from "./login";
import Profile from "./profile";
import CreatePost from "./createPost";
import StreamHome from "./stream-home";
import AllStreams from "./subscribe-streams";
import ViewPost from "./view-post";

//screens examples till they are not created.

function Home(props) {
  return <h1>Home</h1>;
}

export default {
  Home,
  Login,
  Profile,
  AllStreams,
  StreamHome,
  CreatePost,
  ViewPost,
};
