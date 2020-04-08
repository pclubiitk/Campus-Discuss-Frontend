import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
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
        <div className="profile">
          <Profile name={props.name} />
        </div>
        <div className="streams-list-wrapper">
          <StreamsList streams={props.streams} />
        </div>
      </div>
    </nav>
  );
}

// these functions must go in the Hamburger button in the top bar
// and sidebar must be exported
function Hamburger(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Hamburger</Button>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Sidebar name={props.name} streams={props.streams} />
      </Drawer>
    </div>
  );
}

export default Hamburger;
