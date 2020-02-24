import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login.js";
import FriendList from "./components/FriendList.js";
import PrivateRoute from "./utils/PrivateRoute.js";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
          <Link to="/login" className="link">Login</Link>
        </li>
        <li>
          <Link to="/friends" className="link">Friends</Link>
        </li>
      </ul>
      <h1>Test from App.js. This is HOME.</h1> 
      <Switch>
        <PrivateRoute path="/friends" component={FriendList} />
        <Route exact path="/"  />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
