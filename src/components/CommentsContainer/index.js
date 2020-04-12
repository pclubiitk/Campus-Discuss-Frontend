import React from "react";
import Comment from "../comment";

const comment_example = [
  {
    id: 1,
    author: "Ghastly",
    date: "20/2/19",
    text: "Hello!",
    baseUpvotes: 20,
    baseDownvotes: 10,
    reply: [
      {
        id: 2,
        author: "Ghost",
        date: "25/2/19",
        text: "Oh, Nice to meet you",
        baseUpvotes: 1500,
        baseDownvotes: 103,
        reply: [
          {
            id: 3,
            author: "Ghastly",
            date: "29/2/19",
            text: "Me too",
            baseUpvotes: 1,
            baseDownvotes: 1000000,
            reply: [
              {
                id: 4,
                author: "Ghost",
                date: "1/3/19",
                text: "Wow! So, you are the real ghost in even my dimension",
                baseUpvotes: 3000001,
                baseDownvotes: 0,
              },
              {
                id: 6,
                author: "gengar",
                date: "1/3/19",
                text:
                  ":-o. Go Brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
                baseUpvotes: 300,
                baseDownvotes: 4000,
              },
            ],
          },
          {
            id: 7,
            author: "Haunter",
            date: "28/2/19",
            text: "We want to meet you",
            baseUpvotes: 5,
            baseDownvotes: 8,
          },
        ],
      },
    ],
  },
];

function onUpvote(id) {
  alert("comment " + id + ": was upvoted");
}

function onDownvote(id) {
  alert("comment " + id + ": was downvoted");
}

function onReply(id) {
  alert("comment " + id + ": was asked to be replied");
}

function CommentsContainer(props) {
  return comment_example.map((comment) => (
    <Comment
      {...comment}
      level={0}
      onUpvote={(id) => onUpvote(id)}
      onDownvote={(id) => onDownvote(id)}
      onReply={(id) => onReply(id)}
    />
  ));
}

export default CommentsContainer;
