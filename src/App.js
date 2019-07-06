import React, {Component} from 'react';
import './App.css';
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import img from './earwood.jpg'
import KeyImage from './img/linkedin.svg';
import mediumImg from './medium.svg'
import SVG from 'react-inlinesvg';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import CV from './CV'
import Contact from './Contact'

class App extends Component {
  state = {
    showMain: true,
  }

  handleClick = () => {
    this.setState({showMain: false})
  }

  handleMain = () => {
    this.setState({showMain: true})
  }

  render() {
    // console.log('App', this.state)
    return (
      <Router>
        <div className="App">
          <Nav handleClick={this.handleClick} handleMain={this.handleMain} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/Projects' component={Projects}/>
            <Route path='/CV' component={CV} />
            <Route path='/Contact' component={Contact} />
          </Switch>
          {this.state.showMain ?
            <div className="app-main-wrap">
            <img className="background-img" src={img} alt="img" />
            <div className="main-description-wrap">
              <div className="main-description">
                <p>Hi, I'm Natsuki. I'm a full-stack web developer based in NYC.</p>
                <p>I am a food fanatic, an art aficionado, a tireless traveler, and a language lover.</p>
              </div>
              <div className="main-description-sub">
                <p>I am a Front-end oriented engineer proficient in React, JavaScript, and Ruby on Rails.</p>
                <p>I have translated a love of learning languages into an enthusiasm for coding.</p>
                <p>When not coding, I can be found in my home borough of Queens, exploring its food, and soaking up its diverse cultural milieu.</p>
              </div>
              <div className="social-media-wrap">
                <a href={"https://www.linkedin.com/in/natsuki-wada-173a45155/"}
                  target={"_blank"} style={{width:'2%', height:'2%', opacity:'0.7'}}><SVG src={KeyImage} alt="" />
                </a>
                <a href={"https://medium.com/@wachka06"}
                  target={"_blank"} style={{opacity:'0.7', display:'inlineBlock', marginLeft:'1em'}}><SVG src={mediumImg} alt="" />
                </a>
              </div>
            </div>
          </div> : null}
        </div>
      </Router>
    );
  }
}

export default App;
