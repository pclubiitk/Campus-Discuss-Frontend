import React from "react";
import "./style.css";

/*using Material UI*/

import { makeStyles } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Search from "@material-ui/icons/Search";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  topbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

function Topbar(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.topbar} position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">{props.title}</Typography>
      </Toolbar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Search />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
