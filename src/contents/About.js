import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <section className="section-about col col-xl-9">
               <div className="u-center-text u-margin-bottom-big">
                   <h1 className="heading-secondary">About me</h1>
               </div> 
               <div className="row">
                   <div className="col col-lg-12">
                       <h2 className="heading-terciary u-margin-bottom-small">
                           My name is Paulo R. Lopes Reizinho
                       </h2>
                       <p className="paragraph">
                            My background is Administration with focus in accounting. I love coding and the challenges that come with it, creating beautifull UIs with intuitive UX that can be used by millions.<br/>
                            I’m excited to contribute in a meaningfull way to the growth of your awesome company and increase my knowledge along the way.<br/>
                            My favorite technology is React.js and my main focus is Front End, but i love learning and uncover new technologies. 
                       </p>
                   </div>
                   {/* <div className="col col-md-12 col-lg-6">
                       <div className="composition">
                           <h2>dddd</h2>
                       </div>
                   </div> */}

               </div>
            </section>
        )
    }
}

export default About