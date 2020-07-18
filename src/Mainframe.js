// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";
import screens from "./screens";

function Mainframe() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/" component={screens.Home} />
        <Route path="/profile" component={screens.Profile} />
        <Route path="/streams" component={screens.AllStreams} />
        <Route exact path="/stream/:id" component={screens.StreamHome} />
        <Route path="/stream/:id/new" component={screens.CreatePost} />
        <Route path="/post/:id" component={screens.ViewPost} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </div>
  );
}

export default Mainframe;
