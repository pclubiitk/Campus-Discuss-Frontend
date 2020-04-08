import React from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";
import "./style.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import Box from "@material-ui/core/Box";

function Comment(props) {
  const [tds, setTds] = useState("inherit");
  const [tus, setTus] = useState("inherit");
  const [tuc, setTuc] = useState(0);
  const [tdc, setTdc] = useState(0);

  function handleClick() {
    console.log("Click happened");
  }

  return (
    <div>
      <div className="author-details">
        <Box m={0} p={0.6}>
          <AccountCircleTwoToneIcon fontSize="large" color="primary" />
        </Box>
        Bill Joy{props.author}
      </div>
      <div className="com-text">
        {props.text}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip
      </div>
      <div className="menu">
        <Box m={0.5} p={0.8}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleClick()}
          >
            Reply
          </Button>
        </Box>

        <Box m={0.1} p={0.8}>
          <Button
            onClick={() => {
              if (tds == "inherit") {
                setTdc(tdc + 1);
                setTds("primary");
                if (tus == "primary") {
                  setTus("inherit");
                  setTuc(tuc - 1);
                }
              } else {
                setTds("inherit");
                setTdc(tdc - 1);
              }
            }}
          >
            <ThumbDownIcon fontSize="medium" color={tds} /> <b>{tdc}</b>
          </Button>
        </Box>
        <Box m={0.1} p={0.8}>
          <Button
            onClick={() => {
              if (tus == "inherit") {
                setTuc(tuc + 1);
                setTus("primary");
                if (tds == "primary") {
                  setTds("inherit");
                  setTdc(tdc - 1);
                }
              } else {
                setTus("inherit");
                setTuc(tuc - 1);
              }
            }}
          >
            <ThumbUpAltIcon fontSize="medium" color={tus} /> <b>{tuc}</b>
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Comment;
