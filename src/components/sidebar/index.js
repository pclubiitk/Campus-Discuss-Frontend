// @flow
import React from "react";
import { useHistory } from "react-router";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import { subscribedStreams, userProfile } from "../../redux/selectors";
import { useSelector } from "react-redux";

import {
  Typography,
  Avatar,
  Hidden,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CardHeader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  profile: {
    transition: "all 0.15s ease-in-out",
    "&:hover": {
      background: "#ececec",
    },
  },
}));

const SideBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const streams = useSelector(subscribedStreams);
  const profile = useSelector(userProfile);

  const drawer = (isMobile) => (
    <div>
      <div className={classes.toolbar}>
        <Typography variant="h5" color="primary">
          Campus Discuss
        </Typography>
      </div>
      <Divider />
      <div className={classes.profile} onClick={() => history.push("/profile")}>
        <CardHeader
          avatar={<Avatar />}
          title={profile.name}
          subheader={profile.username}
        />
      </div>
      <Divider />
      <List>
        {streams.map((stream) => (
          <ListItem
            button
            key={stream.pk}
            onClick={() => history.push(`/stream/${stream.pk}`)}
          >
            <ListItemIcon>
              <RssFeedIcon />
            </ListItemIcon>
            <ListItemText primary={stream.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer}>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={false}
          onClose={() => {}}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer(true)}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer(false)}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default SideBar;
