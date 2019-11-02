import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";
import AuthComponent from "./components/AuthComponent";
// import axios from "axios";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={AuthComponent} exact />
          <Route path="/header" component={Header} />
        </Switch>
      </HashRouter>
    );
  }
}
export default App;
