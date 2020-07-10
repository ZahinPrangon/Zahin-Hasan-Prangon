import React, { Component } from 'react';
import SkillBar from 'react-skillbars';

export default class Skills extends Component {
  render() {
    let skills = [
      {type: "Javascript", level: 85},
      {type: "Python", level: 85},
      {type: "Java", level: 70},
      {type: "HTML/CSS", level: 90},
      {type: "React", level: 80},
      {type: "MongoDB", level: 75},
      {type: "NodeJS", level: 70}
    ];

    return (
      <section id="contact" className = "container">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                Skills
              </p>

              <div>
              <SkillBar  skills={skills}/>
              </div>

            </div>
          </div>
        </section>
        );
  }
}

