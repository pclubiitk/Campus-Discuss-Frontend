// @flow
import React from "react";

/*using Material UI*/

import { makeStyles } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Typography } from "@material-ui/core";
import { grey, indigo } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => {
  const dark = theme.palette.type === "dark";

  return {
    topbar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: dark ? indigo["900"] : indigo["700"],
    },
    title: {
      color: dark ? indigo["100"] : grey["100"],
    },
    menuIcon: {
      color: dark ? indigo["300"] : grey["100"],
    },
    searchIcon: {
      color: dark ? indigo["300"] : grey["100"],
    },
  };
});

type Props = {
  title: string,
};

function Topbar(props: Props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.topbar} position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <Typography variant="h5" className={classes.title}>
          {props.title}
        </Typography>
      </Toolbar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <SearchIcon className={classes.searchIcon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
