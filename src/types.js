// @flow

export type UserData = {
  _id: number,
  name: string,
  roll: number,
  username: string,
  email: string,
  fblink: string,
  following: number,
  hall: number,
};

export type Stream = {
  _id: number,
  title: string,
  description: string,
  followed_by: number,
};

export type Post = {
  _id: number,
  post_text: string,
  post_title: string,
  pub_date: string,
  last_modified: string,
  author: string,
  stream: number,
};
