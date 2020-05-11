import React, { useState, useMemo } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Mainframe from "./Mainframe";
import Login from "./screens/login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [useDarkMode, setUseDarkMode] = useState(true);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: useDarkMode ? "dark" : "light",
        },
      }),
    [useDarkMode]
  );

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
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/" component={Mainframe} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
