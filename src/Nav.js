import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="Nav" style={{display:'flex'}}>
        <Link to={'/'} className="nav-link"
          style={{fontSize:'1.5em', fontWeight:'bold', display:'inlineBlock'}}
          onClick={this.props.handleMain}>NATSUKI WADA</Link>
        <ul className="nav-link-wrap">
          <li><Link to={'/about'} className="nav-link" onClick={this.props.handleClick}>ABOUT</Link></li>
          <li><Link to={'/projects'} className="nav-link" onClick={this.props.handleClick}>PROJECTS</Link></li>
          <li><Link to={'/cv'} className="nav-link" onClick={this.props.handleClick}>CV</Link></li>
          <li><a className="nav-link" href="mailto:natsukiwad@gmail.com">CONTACT</a></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
