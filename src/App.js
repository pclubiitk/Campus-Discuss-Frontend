import React from "react";
import logo from "./logo.svg";
import "./App.css";

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
