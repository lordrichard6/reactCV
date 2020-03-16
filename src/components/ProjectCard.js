import React, { Component } from 'react';



class ProjectCard extends Component {
    render() {
        return (
            <div class="projectcard col col-lg-4">
                <div class="projectcard__side projectcard__side--front">
                    <div class="projectcard__picture projectcard__picture" style={{ backgroundImage: `linear-gradient(to right bottom, #3a3939, #292727), url(${this.props.back})`}}>
                        &nbsp;
                    </div>
                    <h4 class="projectcard__heading">
                        <a href={this.props.link} target='_blank' rel='noopener noreferrer' class="projectcard__heading-span projectcard__heading-span">{this.props.title}</a>
                    </h4>
                    <div class="projectcard__details">
                        <ul>
                            <li>{this.props.tool1}</li>
                            <li>{this.props.tool2}</li>
                            <li>{this.props.tool3}</li>
                            <li>{this.props.tool4}</li>
                            <li>{this.props.tool5}</li>
                        </ul>
                    </div>
                </div>
                {/* <div class="projectcard__side projectcard__side--back projectcard__side--back">
                    <div class="projectcard__cta">
                        <div class="projectcard__price-box">
                            <p class="projectcard__price-only">Only</p>
                            <p class="projectcard__price-value">CHF 399</p>
                        </div>
                        <a href="#popup" class="btn btn--white">Book Now!</a>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default ProjectCard