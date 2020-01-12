import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

import Home from '../HomePage/home';
import Resume from '../Resume/resume';
import './toolbar.css';

export default function Toolbar() {
   return (
      <div className='container'>
         <header className='toolbar'>
            <Router>
               <div className='navigation'>
                  <ul>
                     <li><Link to='/'>Home</Link></li>
                  </ul>
                  <div className='Home'>
                     <Route exact path='/' component={Home} />
                  </div>
                  <div className='Resume'>
                     <Route exact path='/resume' component={Resume} />
                  </div>
               </div>
            </Router>
         </header>
      </div>
   );
}

