import React, { Component } from 'react';
import { Animated } from "react-animated-css";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
      <nav id="nav-wrap">

      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
       <a className="mobile-btn" href="#!" title="Hide navigation">Hide navigation</a>
       <ul id="nav" className="nav"> 
       <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Skills</a></li>
        </ul>
      </nav>
      
      <div className="row banner"> 

         <div className="banner-text">
         
         <Animated animationIn="zoomIn" isVisible={true}>
         <h1 className="responsive-headline">I am {resumeData.name}.</h1>
         </Animated>
         <Animated animationIn = "fadeIn" isVisible = {true} animationInDelay = "2">
         <h3 style={{fontFamily: 'open'}}>{resumeData.role}{resumeData.roleDescription}
         </h3>
         </Animated>
            <hr/>
            <ul className="social">
               {
                 resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                   return(
                           <li key={item.name}>
                             <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                           </li>
                         )
                       }
                 )
               }
            </ul>
         </div>
         
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
   </header>
      </React.Fragment>
      
    );
  }
}
