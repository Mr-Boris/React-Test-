import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

import Home from '../HomePage/home';
import Resume from '../Resume/resume'

import './toolbar.css';

export default function Toolbar() {
   return (
      <div className='container'>
         <header className='toolbar'>
            <Router>
               <div className='navigation'>
                  <ul>
                     <li><Link to='/home'>Home</Link></li>
                     <li><Link to='/resume'>Resume</Link></li>
                  </ul>
                  <div className='component'>
                     <Route exact path='/home' component={Home} />
                     <Route path='/resume' component={Resume} />
                  </div>
               </div>
            </Router>
         </header>
      </div>
   );
}

