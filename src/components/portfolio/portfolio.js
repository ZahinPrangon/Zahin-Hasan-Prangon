import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
          <h1 style={{ fontSize: "150%" }}>Check Out Some of My Works.</h1>
      </div>

      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {
              resumeData.portfolio && resumeData.portfolio.map((item)=>{
                return(
                  <div className="columns portfolio-item" id= "work">
                    <a href= {`${item.link}`} target="_blank">
                    <div className="item-wrap" style={{ width: "100%"}}>
                        <img src={`${item.imgurl}`} className="item-img" id="image" alt = "portfolio-img"/>
                        <div className="overlay">  
                        <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      
                    </div>
                    </a>
                  </div>
                )
              })
            }
        </div>






  </section>
        );
  }
}

