import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import Footer from './components/Footer/Footer.js';
import About from './components/About/About.js';
import Work from './components/Work/Work.js';
import Contact from './components/Contact/Contact.js';

function App() {
  return (
    <div className="site-wrapper">
      <div>
        <Navigation />
        <div className="custom-main">
          <Router>
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/work">
                <Work />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
