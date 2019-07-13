
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <a href= "/">
           <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/scape/new">Make a scape</NavLink></li>
           <li><NavLink to="/about">About</NavLink></li>
           <li><NavLink to="/contact">Contact</NavLink></li>
           <li><NavLink to="/resources">Resources</NavLink></li>
           <li><NavLink to="/scapes">Scapes</NavLink></li>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}
 
export default NavBar;