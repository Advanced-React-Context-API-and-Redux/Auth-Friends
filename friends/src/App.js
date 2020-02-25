import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login.js";
import Header from "./components/Header.js";
import FriendList from "./components/FriendList.js";
import PrivateRoute from "./utils/PrivateRoute.js";

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute path="/friends" component={FriendList} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
