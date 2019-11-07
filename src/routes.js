import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import ClientLogin from "./components/ClientLogin/ClientLogin";
import Contact from "./components/Contact/Contact";
import AuthComponent from "./components/AuthComponent/AuthComponent";
import ClientGalleries from "./components/ClientGalleries/ClientGalleries";
import AdminGallery from "./components/AdminGallery/AdminGallery";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Portfolio" component={Portfolio} />
    <Route path="/ClientLogin" component={ClientLogin} />
    <Route path="/Contact" component={Contact} />
    <Route path="/AuthComponent" component={AuthComponent} />
    <Route path="/ClientGalleries" component={ClientGalleries} />
    <Route path="/AdminGallery" component={AdminGallery} />
  </Switch>
);
