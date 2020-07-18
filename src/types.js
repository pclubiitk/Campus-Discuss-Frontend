// @flow

export type UserData = {
  id: number,
  name: string,
  roll: number,
  username: string,
  email: string,
  fblink: string,
  following: number,
};

export type Stream = {
  id: number,
  title: string,
  description: string,
  followed_by: number,
};

export type Post = {
  id: number,
  post_text: string,
  post_title: string,
  pub_date: string,
  last_modified: string,
  author: number,
  stream: number,
};
