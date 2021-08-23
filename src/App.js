import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';
import Footer from './components/Footer/Footer.js';
import About from './components/About/About.js';
import Work from './components/Work/Work.js';

function App() {
  return (
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
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
