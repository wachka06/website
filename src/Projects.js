import React, {Component} from 'react';
import './App.css';
// import ReactPlayer from 'react-player'

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div className="project-demo-wrap">
          <h3>Rameniac</h3>
          <div className="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qnuky0bKun8" frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          </div>
          <div className="project-demo-description">
            <p>Inspired by my love of ramen, I created this app to help people find a nearby restaurant
              with just the type of dish they want. Utilizing Yelp API and Google Maps API,
              I constructed an app where users can read and write reviews,
              and save their favorite ramen places.</p>
            <p>Server-side: Ruby on Rails & PostgreSQL | Client-side: React</p>
          </div>
        </div>
        <div className="project-demo-wrap">
          <h3>Mushroompedia</h3>
          <div className="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lhPiLwi-g0E" frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          </div>
          <div className="project-demo-description">
            <p>An app to help mushroom hunters everywhere! 
              With this app, lugging a book around in the forest is no longer necessary.
              This app is a user-editable guide to mushroom species
              from Shiitake to Maitake to Shimeji.</p>
            <p>Server-side: Ruby on Rails & PostgreSQL | Client-side: React</p>
          </div>
        </div>
        <div className="project-demo-wrap">
          <h3>Mushroom Hunting</h3>
          <div className="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Y2LbEB6oWAI" frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          </div>
          <div className="project-demo-description">
            <p>My love of art, CSS animation, and mushroom hunting came together
              in this colorful and amusing app. Find mushrooms and improve your collection!</p>
            <p>Server-side: Ruby on Rails & PostgreSQL | Client-side: React</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
