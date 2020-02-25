import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login.js";
import Header from "./components/Header.js";
import Friend from "./components/Friend.js";
import FriendList from "./components/FriendList.js";
import PrivateRoute from "./utils/PrivateRoute.js";

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>  
        <PrivateRoute exact path="/people/:id" component={Friend} />
        <PrivateRoute path="/people" component={FriendList} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
