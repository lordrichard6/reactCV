import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Experience from './contents/Experience';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Projects from './contents/Projects';

import Navbar from './components/Navbar';
import './App.css';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/education'>
          <Education />
        </Route>
        <Route exact path='/skills'>
          <Skills />
        </Route>
        <Route exact path='/experience'>
          <Experience />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route exact path='/Contact'>
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
