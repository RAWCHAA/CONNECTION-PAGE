import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Friends from "./components/Friends";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Connection from "./components/Connection";
import Photos from "./components/Photos";
import Messages from "./components/Messages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Friends">
          <Friends />
        </Route>
        <Route exact path="/Interest">
          <Interest />
        </Route>
        <Route exact path="/Profile">
          <Profile />
        </Route>
        <Route exact path="/Connection">
          <Connection />
        </Route>
        <Route exact path="/Photos">
          <Photos />
        </Route>
        <Route exact path="/Messages">
          <Messages />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
