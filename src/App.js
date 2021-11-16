import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Particle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" exact component={Projects} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/contact" exact component={Contact} />
          <Home />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
