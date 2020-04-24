import React from "react";

//exporting screens from this folder.
import Login from "./login";

//screens examples till they are not created.

function Home(props) {
  return <h1>Home</h1>;
}

function Profile(props) {
  return <h1>Profile</h1>;
}

function Streams(props) {
  return <h1>All Streams</h1>;
}

function Stream(props) {
  return <h1>Stream</h1>;
}

function NewPost(props) {
  return <h1>Waiting for new post</h1>;
}

export default { Home, Login, Profile, Streams, Stream, NewPost };
