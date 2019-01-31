import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FirstComp from './FirstComp';
import FirstButton from './FirstButton';
import FirstCounter from './FirstCounter';

export default function FirstRouter() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/a">FirstCounter</Link>
            </li>
            <li>
              <Link to="/c">FirstButton</Link>
            </li>
            <li>
              <Link to="/b/woooooooo">FirstComp</Link>
            </li>
          </ul>
  
  
          <Route path="/a" component={FirstCounter} />
          <Route path="/b/:text" component={FirstComp} />
          <Route path="/c" component={FirstButton} />
        </div>
      </Router>
    );
  }