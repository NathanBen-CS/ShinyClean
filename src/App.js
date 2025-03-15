import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Home';
import Navbar from './Navbar';
import Quote from './Quote';
import Packages from './Packages';
import About from './About';
import "./App.css";
import {Helmet} from "react-helmet";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="fade"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mobile-packages" element={<Packages />} />
          <Route path="/quote-inquiry" element={<Quote />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <Navbar />
          
          <AnimatedRoutes />
          <div className='footer'>
            <a target="_blank" href="https://www.nobounds.dev">Powered by NoBounds.dev</a>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
