import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Mainframe from "./Mainframe";
import Login from "./screens/login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function PrivateRoute(props) {
    return (
      <Route
        path={props.path}
        render={() =>
          isAuthenticated ? <props.component /> : <Redirect to="/login" />
        }
      />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/" component={Mainframe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
