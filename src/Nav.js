import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import CV from './CV'
import Contact from './Contact'

class Nav extends Component {
  render() {
    return (
      <div className="Nav" style={{display:'flex'}}>
        <Link to={'/'} className="nav-link" style={{fontSize:'1.5em', fontWeight:'bold', display:'inlineBlock'}}>NATSUKI WADA</Link>
        <ul className="nav-link-wrap">
          <li><Link to={'/about'} className="nav-link">ABOUT</Link></li>
          <li><Link to={'/projects'} className="nav-link">PROJECTS</Link></li>
          <li><Link to={'/cv'} className="nav-link">CV</Link></li>
          <li><Link to={'/contact'} className="nav-link">CONTACT</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
