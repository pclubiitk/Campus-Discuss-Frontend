// @flow
import React, { useState, useMemo } from "react";
import { SnackbarProvider } from "notistack";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Provider, useSelector } from "react-redux";
import { isLoggedIn } from "./redux/selectors";
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [useDarkMode, setUseDarkMode] = useState(false);
  const loggedIn = useSelector(isLoggedIn);

  React.useEffect(() => {
    if (loggedIn) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [loggedIn]);

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
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          path="/"
          isAuthenticated={isAuthenticated}
          render={Mainframe}
        />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
