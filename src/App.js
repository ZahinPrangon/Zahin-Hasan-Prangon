import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Route, Switch } from 'react-router-dom';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import Skills from './components/skills/skills';
import resumeData from './resumeData';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/test'>
          <div style={{backgroundColor: 'white'}}>
            <Test />
          </div>
        </Route>

        <Route path='/'>
          <div className="page-container">
            <Header resumeData={resumeData} />
            <ScrollAnimation animateIn="fadeIn">
              <About resumeData={resumeData} />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn">
              <Resume resumeData={resumeData} />
              <Portfolio resumeData={resumeData} />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn">
              <Skills resumeData={resumeData} />
            </ScrollAnimation>

            <Footer resumeData={resumeData} />
          </div>
        </Route>
      </Switch>
    </div>
  )
}

function Test() {
  return <h2>Test</h2>;
}
export default App;
