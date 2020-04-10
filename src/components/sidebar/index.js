import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";

function Profile(props) {
  // AccountCircleIcon can be replaced by Avatar when we add Profile Picture functionality
  return (
    <Button color="primary" startIcon={<AccountCircleIcon />}>
      {props.name}
    </Button>
  );
}

function StreamItem(props) {
  return (
    <ListItem button onClick={() => alert("clicked " + props.streamName)}>
      {props.streamName}
    </ListItem>
  );
}

function StreamsList(props) {
  const list = props.streams.map(stream => <StreamItem streamName={stream} />);
  return (
    <List component="nav" className="streams-list">
      {list}
    </List>
  );
}

function Sidebar(props) {
  return (
    <nav>
      <div className="sidebar">
        <div className="AppName" class = "Appname">
          CAMPUS DISCUSS
        </div>
        <hr></hr><hr></hr>
        <div className="streams-list-wrapper">
          <StreamsList streams={props.streams} />
        </div>
        <div className = "profile"  class = "absolute" >
          <Profile name = {props.name} /> 
        </div>
      </div>
    </nav>
  );
}

// these functions must go in the Hamburger button in the top bar
// and sidebar must be exported
function Hamburger(props) {
 return (
    <div>
      <Drawer variant = "permanent" anchor = "left"> 
        <Sidebar name={props.name} streams={props.streams} />
      </Drawer>
    </div>
  );
}

export default Hamburger;
