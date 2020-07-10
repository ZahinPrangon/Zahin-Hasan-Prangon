import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';
import ScrollAnimation from 'react-animate-on-scroll';


import resumeData from './resumeData';


class App extends Component {
  render() {
    return (   
      <div className = "container">

          <Header resumeData={resumeData}/>  

          <ScrollAnimation animateIn="fadeIn">
            <About resumeData={resumeData}/>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <Resume resumeData={resumeData}/>
            <Portfolio resumeData={resumeData}/>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <Skills resumeData={resumeData}/>
          </ScrollAnimation>
      
          <Footer resumeData={resumeData}/>    

    </div>
    );
  }
}

export default App;
