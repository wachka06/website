import React, {Component} from 'react';
import './App.css';


class CV extends Component {
  render() {
    return (
      <div className="CV-wrap">
        <div className="CV-column1">
          <div>SKILLS</div>
        </div>
        <div className="CV-column2">
          <div>
            <div className="CV-article">
              <h4>Coding</h4>
              <div>React, JavaScript, Ruby on Rails, Ruby, HTML5/CSS3, MySQL, PostgreSQL, GitHub</div>
            </div>
            <div className="CV-article">
              <h4>Design</h4>
              <div>Adobe Photoshop, Illustrator, After Effects</div>
            </div>
            <div className="CV-article">
              <h4>languages</h4>
              <div>Japanese (Native), Chinese (Business Level)</div>
            </div>
          </div>
        </div>
        <div className="CV-column1">
          <div>EXPERIENCE</div>
        </div>
        <div className="CV-column2">
          <div className="CV-article">
            <div className="job-title-wrap">
              <div className="job-title">
                <h4>International Sales Assistant</h4>
                <div>Fon-Star International Technology Inc.</div>
              </div>
              <div className="job-title-year">
                <div>Jan 2015 - Jan 2016</div>
                <div>Tainan, Taiwan</div>
              </div>
              </div>
              <div>
              <div className="job-description">
                <p>- Managed  meetings and communications for Canadian,
                  Japanese and Taiwanese corporate clients.
                  Met with representatives to review needs, planned and executed event.</p>
                <p>- As the go-between for the company and the international client,
                  I communicated needs, standards and timelines while managing cultural differences.
                  Coordinated inventory needs with the factory workers in Taiwan.</p>
              </div>
            </div>
          </div>
          <div className="CV-article">
            <div className="job-title-wrap">
              <div className="job-title">
                <h4>Sales Assistant</h4>
                <div>Yokogawa Sake Brewery</div>
              </div>
              <div className="job-title-year">
                <div>Apr 2009 - Aug 2012</div>
                <div>Ehime, Japan</div>
              </div>
              </div>
              <div>
              <div className="job-description">
                <p>- Sold Sake to individual and corporate customers.
                  Worked closely with clients and used cross-merchandising
                  to help increase demand for sake.
                  Managed inventory display to enhance customer experience.</p>
              </div>
            </div>
          </div>
          <div className="CV-article">
            <div className="job-title-wrap">
              <div className="job-title">
                <h4>Japanese Teacher Intern</h4>
                <div>Trinity Episcopal School</div>
              </div>
              <div className="job-title-year">
                <div>Nov 2007 - Feb 2008</div>
                <div>Charlotte, NC</div>
              </div>
              </div>
              <div>
              <div className="job-description">
                <p>- Developed curricula, created educational materials,
                  and taught classes for elementary and middle school Japanese classes
                  to engage students in Japanese studies.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="CV-column1">
          <div>EDUCATION</div>
        </div>
        <div className="CV-column2">
          <div className="CV-article">
            <div className="job-title-wrap">
              <div className="job-title">
                <h4>Flatiron School</h4>
                <div>Full Stack Web Development Immersive Program</div>
              </div>
              <div className="job-title-year">
                <div>2018</div>
              </div>
              </div>
              <div>
            </div>
          </div>
          <div className="CV-article">
            <div className="job-title-wrap">
              <div className="job-title">
                <h4>National Cheng Kung University</h4>
                <div>Mandarin Chinese Language Program</div>
              </div>
              <div className="job-title-year">
                <div>2012 - 2014</div>
                <div>Tainan, Taiwan</div>
              </div>
            </div>
          </div>
          <div className="CV-article">
            <div className="job-title-wrap">
              <div className="job-title">
                <h4>Kyoto Women’s University</h4>
              </div>
              <div className="job-title-year">
                <div>Kyoto, Japan</div>
              </div>
              </div>
              <div>
              <div className="job-description">
                <p>BA, English Studies</p>
                <p>GPA 3.41</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
