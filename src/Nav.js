import React, {Component} from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Contact from './Contact'

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <Home></Home>
      </div>
    );
  }
}

export default Nav;
