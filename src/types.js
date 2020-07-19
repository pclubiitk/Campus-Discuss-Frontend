// @flow

export type UserData = {
  pk: number,
  name: string,
  roll: number,
  username: string,
  email: string,
  fblink: string,
  following: number,
  hall: number,
};

export type Stream = {
  pk: number,
  title: string,
  description: string,
  followed_by: number,
};

export type Post = {
  pk: number,
  post_text: string,
  post_title: string,
  pub_date: string,
  last_modified: string,
  author: UserData,
  stream: number,
};
