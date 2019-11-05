import React, { Component } from "react";

// import Home from "./components/Home";
import routes from "./routes";
import "./App.css";
import Header from "./components/Header/Header";

// import axios from "axios";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {routes}
      </div>
    );
  }
}
export default App;
