import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import back from "./back.jpg";
import "./App.css";
import AuthComponent from "./components/AuthComponent";
// import axios from "axios";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <div className="logo">
            <div>logo</div>
          </div>
          <div className="tabs">about</div>
          <div>contact me</div>
          <div>portfolio</div>
          <div>client login</div>
        </header>
        <div className="img">
          <img src={back} />
        </div>
        <Switch>
          <Route path="/" component={AuthComponent} exact />
          {/* <Route path="/header" component={Header} /> */}
        </Switch>
      </HashRouter>
    );
  }
}
export default App;
