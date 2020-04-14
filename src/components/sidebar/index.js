import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { withStyles } from "@material-ui/core/styles";
import "./style.css";

const styles = {
  root: {
    minWidth: 40,
    color: "black",
  },
};
function Profile(props) {
  // AccountCircleIcon can be replaced by Avatar when we add Profile Picture functionality
  return (
    <Button color="primary" startIcon={<AccountCircleIcon />} fullWidth>
      {props.name}
    </Button>
  );
}

function StreamItem(props) {
  return (
    <ListItem
      button
      className={styles.root}
      onClick={() => alert("clicked " + props.streamName)}
    >
      <ListItemIcon className={styles.root}>
        <ChevronRightIcon />
      </ListItemIcon>
      <ListItemText primary={props.streamName} />
    </ListItem>
  );
}

function StreamsList(props) {
  const list = props.streams.map((stream) => (
    <StreamItem streamName={stream} />
  ));
  return (
    <List component="nav" className="streams-list">
      {list}
    </List>
  );
}

function Sidebar(props) {
  return (
    <nav>
      <Drawer variant="permanent" anchor="left" width="100%">
        <div class="app-name">Campus Discuss</div>
        <div className="streams-list-wrapper">
          <StreamsList streams={props.streams} />
        </div>
        <div className="profile">
          <Profile name={props.name} />
        </div>
      </Drawer>
    </nav>
  );
}

export default Sidebar;
