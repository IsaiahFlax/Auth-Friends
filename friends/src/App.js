import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          {/*<Route render={() => <Redirect to="/login" />} />*/}
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

