import React, { Component } from 'react';


class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'myskills': [   'HTML5/BOOTSTRAP', 
                            'CSS/SASS', 
                            'JAVASCRIPT', 
                            'REACTJS', 
                            'PYTHON', 
                            'DJANGO', 
                            'GIT', 
                            'WEBPACK/PARCEL', 
                            'PHOTOSHOP', 
                            'SKETCH']
        };
    }
    render() {
        return (
            <div className='section-skills col col-lg-9'>
                <div className="u-center-text u-margin-bottom-medium u-margin-top-medium">
                    <h1 className='heading-secondary'>My Skills</h1>
                </div>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills