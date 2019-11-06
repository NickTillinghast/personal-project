import React, { Component } from "react";
import routes from "./routes";

import "./App.css";
import Header from "./components/Header/Header";

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
