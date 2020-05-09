import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
import { Typography } from "@material-ui/core";
import { indigo, grey, blueGrey } from "@material-ui/core/colors";
import { useSelector } from "react-redux";
import { subscribedStreams, userProfile } from "../../selectors";

const useStyles = makeStyles((theme) => {
  const dark = theme.palette.type === "dark";
  return {
    profileName: {
      color: dark ? grey["400"] : indigo["900"],
    },
    accountCircleIcon: {
      color: dark ? indigo["400"] : indigo["900"],
    },
    appName: {
      textAlign: "center",
      fontSize: "28px",
      padding: "10px",
      backgroundColor: dark ? grey["700"] : indigo["700"],
      color: dark ? indigo["50"] : indigo["50"],
    },
  };
});

const styles = {
  root: {
    minWidth: 40,
  },
};
function Profile(props) {
  const classes = useStyles();
  // AccountCircleIcon can be replaced by Avatar when we add Profile Picture functionality
  return (
    <Button
      color="primary"
      startIcon={
        <Typography className={classes.accountCircleIcon}>
          <AccountCircleIcon />
        </Typography>
      }
      fullWidth
    >
      <Typography className={classes.profileName}>{props.name}</Typography>
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

function Sidebar() {
  const classes = useStyles();
  const streams = useSelector(subscribedStreams);
  const user = useSelector(userProfile);
  return (
    <nav>
      <Drawer variant="permanent" anchor="left" width="100%">
        <Typography variant="h4" className={classes.appName}>
          Campus Discuss
        </Typography>
        <div className="streams-list-wrapper">
          <StreamsList streams={streams} />
        </div>
        <div className="profile">
          <Profile name={user.name} />
        </div>
      </Drawer>
    </nav>
  );
}

export default Sidebar;
