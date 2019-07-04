import React, {Component} from 'react';
import './App.css';


class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="about-article-wrap">
          <h2>Hi, I’m Natsuki!</h2>
          <p>
            I was born and raised in Japan, worked in Taiwan, and moved to NYC.
            My coding journey started from a desire to share good experiences with others.
            While wandering in Tokyo, I ran across a French developer who made an app to match cheese and wine.
            Oh là là, I had an epiphany! Technology can combine with food, art...anything, really!
            and enhance our experience of them!
          </p>
        </div>
        <h2>I am...</h2>
        <div className="about-article-wrap">
          <h3>Art Aficionado:</h3>
          <p className="about-article-description">
            As a front-end engineer, I am drawn to elegant and user-friendly design.
            I’m also a comic writer, and I sometimes make coding comics.
            You can check out some of them here.
          </p>
        </div>
        <div className="about-article-wrap">
          <h3>Food Fanatic:</h3>
          <p className="about-article-description">
            I love to explore new cultures through their cuisines.
            My weekends are spent exploring Queens for new foods I’ve never tried.
            I also enjoy basking in nature and hunting for wild mushrooms.
            That’s why I created a couple of mushroom-related apps (you don’t want to pick poisonous ones, right?)
            and a ramen-finding app. Check them out here!
          </p>
          <p className="about-article-description">
            Recently, I’ve been exploring diners around NYC and soaking up their 1960’s atmosphere.
            Nothing says old-school like a place that serves an egg cream!
          </p>
        </div>
        <div className="about-article-wrap">
          <h3>Language Lover:</h3>
          <p className="about-article-description">
            Taiwan piqued my interest because of its warm-hearted people and delicious food,
            so I ended up going there to study Mandarin. From this came a passion for learning languages.
            I eventually took a job there and spent 3 and a half years in the country.
            My love of languages has now translated over into my interest in computer languages,
            and my desire to make web applications to connect with the world.
          </p>
        </div>
        <div className="about-article-wrap">
          <h3>Language Lover:</h3>
          <p className="about-article-description">
            Taiwan piqued my interest because of its warm-hearted people and delicious food,
            so I ended up going there to study Mandarin. From this came a passion for learning languages.
            I eventually took a job there and spent 3 and a half years in the country.
            My love of languages has now translated over into my interest in computer languages,
            and my desire to make web applications to connect with the world.
          </p>
          <p className="about-article-description">
            Sometimes I wonder how the style of characters or typography
            used in a language affect the overall design of websites.
            Here are the details in my blog.
          </p>
        </div>
        <div className="about-article-wrap">
          <h3>Tireless Traveler:</h3>
          <p className="about-article-description">
            My love of traveling started from visiting temples in Kyoto
            when I was in college. I explored small islands, lighthouses,
            and old ruins during my time in Taiwan. I came across many hidden gems
            that did not seem to be well-known. I wanted to share the feelings
            I had seeing these places with the world through websites and apps.
            This is what gave me the passion to be a developer.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
