import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import img1 from './img/jinmen.jpg'
import img2 from './img/lugang1.jpg'
import img3 from './img/tasogare_couple.jpg'
import img4 from './img/fuguijiao_lighthouse.jpg'
import img5 from './img/jilong.jpg'
import img6 from './img/houtong.jpg'
import img7 from './img/sandal.jpg'
import img8 from './img/miao_apo.jpg'
import img9 from './img/pixiu.jpg'


class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="about-article-wrap">
          <h2>Hi, I’m Natsuki!</h2>
          <p　className="about-article-description">
            I was born and raised in Japan, worked in Taiwan, and moved to NYC.
            My coding journey started from a desire to share good experiences with others.
            While wandering in Tokyo, I ran across a French developer who made an app to match cheese and wine.
            Oh là là, I had an epiphany! Technology can combine with food, art...anything, really!
            and enhance our experience of them!
          </p>
        </div>
        <h2>I am...</h2>
        <div className="about-article-wrap">
          <h3><span>A</span>rt <span>A</span>ficionado:</h3>
          <p className="about-article-description">
            As a front-end engineer, I am drawn to elegant and user-friendly design.
            I’m also a comic writer, and I sometimes make coding comics.
            You can check out some of them here.
          </p>
          <div className="blog-wrap">
            <blockquote className="embedly-card"><h4><a href="https://medium.com/@wachka06/i-miss-ya-ruby-84bc1d2cbdcb">I miss ya, RUBY! - Natsuki Wada - Medium</a></h4><p>When I went mushroom hunting, I realized that counting how many mushrooms we had collected(and what kind) is easier using Ruby than Javascript. In Ruby, when you make a count hash, you can set the default value of the key to zero. Compared to Javascript, the code is very neat, clear, and easy to read.</p></blockquote>
            <script async src="//cdn.embedly.com/widgets/platform.js" charSet="UTF-8"></script>
            <blockquote className="embedly-card"><h4><a href="https://medium.com/@wachka06/story-of-inheritance-e92f63fabe70">Story of Inheritance - Natsuki Wada - Medium</a></h4><p>"Story of Inheritance" is published by Natsuki Wada.</p></blockquote>
            <script async src="//cdn.embedly.com/widgets/platform.js" charSet="UTF-8"></script>
          </div>
        </div>
        <div className="about-article-wrap">
          <h3><span>F</span>ood <span>F</span>anatic:</h3>
          <p className="about-article-description">
            I love to explore new cultures through their cuisines.
            My weekends are spent exploring Queens for new foods I’ve never tried.
            I also enjoy basking in nature and hunting for wild mushrooms.
            That’s why I created a couple of mushroom-related apps (you don’t want to pick poisonous ones, right?)
            and a ramen-finding app. Check them out <span className="link-to-projects"><Link to={'/projects'} style={{textDecoration:'none', fontSize:'.9em'}} onClick={this.props.handleClick}>here</Link></span>!
          </p>
          <p className="about-article-description">
            Recently, I’ve been exploring diners around NYC and soaking up their 1960’s atmosphere.
            Nothing says old-school like a place that serves an egg cream!
          </p>
        </div>
        <div className="about-article-wrap">
          <h3><span>L</span>anguage <span>L</span>over:</h3>
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
          <div className="blog-wrap">
            <blockquote className="embedly-card"><h4><a href="https://medium.com/@wachka06/why-are-japans-websites-so-cluttered-59dbc8c99cd3">Why are Japan's Websites so Cluttered? - Natsuki Wada - Medium</a></h4><p>I was talking with my husband, an American, once, and he commented to me, "It's interesting how Japanese Yahoo looks so old fashioned. It looks like the American version looked over ten years ago." I had never thought about this, but I went and compared the American and Japanese versions of Yahoo's main page: The design is radically different!</p></blockquote>
            <script async src="//cdn.embedly.com/widgets/platform.js" charSet="UTF-8"></script>
          </div>
        </div>
        <div className="about-article-wrap">
          <h3><span>T</span>ireless <span>T</span>raveler:</h3>
          <p className="about-article-description">
            My love of traveling started from visiting temples in Kyoto
            when I was in college. I explored small islands, lighthouses,
            and old ruins during my time in Taiwan. I came across many hidden gems
            that did not seem to be well-known. I wanted to share the feelings
            I had seeing these places with the world through websites and apps.
            This is what gave me the passion to be a developer.
          </p>
          <div className="photos-container">
            <a href="#" className="photo-wrap">
              <span className="text"><h1>Jinmen Island</h1></span>
              <img src={img1} alt="" />
            </a>
            <a href="#" className="photo-wrap">
              <span className="text"><h1>Lugang</h1></span>
              <img src={img2} alt="" />
            </a>
            <a href="#" className="photo-wrap">
              <span className="text"><h1>Tainan</h1></span>
              <img src={img3} alt="" />
            </a>
            <a href="#" className="photo-wrap">
              <span className="text"><h1>Fuguijiao Lighthouse</h1></span>
              <img src={img4} alt="" />
            </a>
            <a href="#" className="photo-wrap">
              <span className="text"><h1>Miaokou Night Market</h1></span>
              <img src={img5} alt="" />
            </a>
            <a href="#" className="photo-wrap">
              <span className="text"><h1>Houtong Cat Village</h1></span>
              <img src={img6} alt="" />
            </a>
            <a href="#" className="photo-wrap">
              <span className="text"><h1>Local Gourmet</h1></span>
              <img src={img7} alt="" />
            </a>
            <a href="#" className="photo-wrap">
              <span className="text"><h1>Historical Temples</h1></span>
              <img src={img8} alt="" />
            </a>
            <a href="#" className="photo-wrap">
              <span className="text"><h1>Biyun Temple</h1></span>
              <img src={img9} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
