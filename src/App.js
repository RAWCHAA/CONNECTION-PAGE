import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Friends from "./components/Friends";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/friends">
          <Friends />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
