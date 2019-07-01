import React, {Component} from 'react';
import './App.css';
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import img from './earwood.jpg'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import CV from './CV'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/Projects' component={Projects} />
              <Route path='/CV' component={CV} />
              <Route path='/Contact' component={Contact} />
          </Switch>
          <img src={img} alt="img" />
          <div className="main-description-wrap" style={{flexWrap:'wrap', position:'fixed', bottom:'5em'}}>
            <div style={{fontSize:'1.2em', textAlign:'left', margin:'0', padding:'1em'}}>
              <p>Hi, I'm Natsuki. I'm a full-stack web developer based in NYC.</p>
              <p>I am a food fanatic, an art aficionado, a tireless traveler, and a language lover.</p>
            </div>
            <div className="main-description-sub" style={{fontSize:'0.7em', textAlign:'left', margin:'0em', padding:'0em 2em 2em 2em'}}>
              <p>I am a Front-end oriented engineer proficient in React, JavaScript, and Ruby on Rails.</p>
              <p>I have translated a love of learning languages into an enthusiasm for coding.</p>
              <p>When not coding, I can be found in my home borough of Queens exploring its food and history.</p>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
