import React from "react";
import "./style.css";

/*using Material UI*/

import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Search from "@material-ui/icons/Search";
import { Typography } from "@material-ui/core";

function Topbar(props) {
  return (
    <AppBar position="static">
      <div class="topbar">
        <div>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">{props.title}</Typography>
          </Toolbar>
        </div>
        <div>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Search />
            </IconButton>
          </Toolbar>
        </div>
      </div>
    </AppBar>
  );
}

export default Topbar;
