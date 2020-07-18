// @flow
import React, { useState, useMemo } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import store from "./redux/store";

import Mainframe from "./Mainframe";
import Login from "./screens/login";

const PrivateRoute = (props: {
  path: string,
  isAuthenticated: boolean,
  render: () => React$Node,
}) => {
  return (
    <Route
      path={props.path}
      render={() =>
        props.isAuthenticated ? props.render() : <Redirect to="/login" />
      }
    />
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [useDarkMode, setUseDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: useDarkMode ? "dark" : "light",
        },
      }),
    [useDarkMode]
  );

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute
              path="/"
              isAuthenticated={isAuthenticated}
              render={Mainframe}
            />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
