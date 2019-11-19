import React, { Component } from "react";
import routes from "./routes";

// import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
