import React from "react";
import { Route, Switch } from "react-router-dom";
import screens from "./screens";

function Mainframe(props) {
  return (
    <Switch>
      <Route path="/home" component={screens.Home} />
      <Route path="/profile" component={screens.Profile} />
      <Route path="/streams" component={screens.Streams} />
      <Route exact path="/stream/:id" component={screens.Stream} />
      <Route path="/stream/:id/newpost" component={screens.NewPost} />
      <Route render={() => <h1>404: page not found</h1>} />
    </Switch>
  );
}

export default Mainframe;
