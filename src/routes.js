import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Weddings from "./components/Weddings/Weddings";
import ClientLogin from "./components/ClientLogin/ClientLogin";
import Contact from "./components/Contact/Contact";
import AuthComponent from "./components/AuthComponent/AuthComponent";
import ClientGalleries from "./components/ClientGalleries/ClientGalleries";
import AdminGallery from "./components/AdminGallery/AdminGallery";
import Kinley from "./components/Kinley/Kinley";
import FamilyGalleries from "./components/FamilyGalleries/FamilyGalleries";
import PersonalWork from "./components/PersonalWork/PersonalWork";
import Portraits from "./components/Portraits/Portraits";
import Cora from "./components/Cora/Cora";
import Scarlett from "./components/Scarlett/Scarlett";
import Amber from "./components/Amber/Amber";
import Footer from "./components/Footer/Footer";
// import PersonalWork2 from "./PersonalWork2/PersonalWork2";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Weddings" component={Weddings} />
    <Route path="/ClientLogin" component={ClientLogin} />
    <Route path="/Contact" component={Contact} />
    <Route path="/AuthComponent" component={AuthComponent} />
    <Route path="/ClientGalleries" component={ClientGalleries} />
    <Route path="/AdminGallery" component={AdminGallery} />
    <Route path="/Kinley" component={Kinley} />
    <Route path="/FamilyGalleries" component={FamilyGalleries} />
    <Route path="/PersonalWork" component={PersonalWork} />
    <Route path="/Portraits" component={Portraits} />
    <Route path="/Cora" component={Cora} />
    <Route path="/Scarlett" component={Scarlett} />
    <Route path="/Amber" component={Amber} />
    <Route path="/Footer" component={Footer} />
    {/* <Route path="/PersonalWork2" component={PersonalWork2} /> */}
  </Switch>
);
