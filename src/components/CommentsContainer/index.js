import React, { useState } from "react";
import Comment from "../comment";

const comment_example = [
  {
    id: 1,
    author: "Ghastly",
    date: "20/2/19",
    text: "Hello!",
    baseUpvotes: 20,
    baseDownvotes: 10,
    replies: [
      {
        id: 2,
        author: "Ghost",
        date: "25/2/19",
        text: "Oh, Nice to meet you",
        baseUpvotes: 1500,
        baseDownvotes: 103,
        replies: [
          {
            id: 3,
            author: "Ghastly",
            date: "29/2/19",
            text: "Me too",
            baseUpvotes: 1,
            baseDownvotes: 1000000,
            replies: [
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
            author:
              "Hauntersddsdfsdgsdgsfdfhxdfghzsdgzsgzdgzdgzdvbzdbgzdvgzxdvxzdvxzdxzdbxdbxdbxfbxdvzdgzgznbxzdbgxzddgxzddgzdgzdgzdgzddgzdgzxdgzdgxzdgzdgzdgzgzdgzgzgzdgzdgzxdgxdddffjkggfjdhggdfhgjhgfdszdxgfchvmnbvhafghgvghfcgvwraegfhcgnvgxfhcgnwrgxhfcgmjgvhqwertyuioplkjhgfdsazxcvbnm,",
            date: "28/2/19",
            text: "We want to meet you",
            DP:
              "https://miro.medium.com/max/1400/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg",
            baseUpvotes: 5,
            baseDownvotes: 8,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    author: "Gengar",
    date: "16/5/19",
    text: "Yup, nobody finds us",
    baseUpvotes: 7000000,
    baseDownvotes: 1,
    replies: [
      {
        id: 9,
        author: "Ghost",
        date: "19/5/19",
        text: ";-(",
        baseUpvotes: 1,
        baseDownvotes: 2342323,
      },
    ],
  },
];

function onUpvote(id) {
  console.log("comment " + id + ": was upvoted");
}

function onDownvote(id) {
  console.log("comment " + id + ": was downvoted");
}

function onReply(id) {
  console.log("comment " + id + ": was asked to be replied");
}

function CommentsContainer(props) {
  const [openReplyBoxId, setOpenReplyBoxId] = useState(null);

  function openReplyBox(id) {
    if (openReplyBoxId === null) return false;
    if (id === openReplyBoxId) {
      return true;
    } else {
      return false;
    }
  }

  return comment_example.map((comment) => (
    <Comment
      key={comment.id}
      {...comment}
      onUpvote={(id) => onUpvote(id)}
      onDownvote={(id) => onDownvote(id)}
      onReply={(id) => onReply(id)}
      showReplies={true}
      setOpenReplyBoxId={setOpenReplyBoxId}
      openReplyBox={(id) => openReplyBox(id)}
    />
  ));
}

export default CommentsContainer;
