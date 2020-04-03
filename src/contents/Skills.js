import React, { Component } from 'react';


class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'proficient': [ 
                'HTML5/BOOTSTRAP', 
                'CSS/SASS', 
                'JAVASCRIPT', 
                'REACT.JS', 
                'PYTHON',  
                'GIT',
                'NODE.JS',
                'EXPRESS.JS'
            ],
            'knowledgeable': [
                'DJANGO',
                'ANGULAR',
                'VUE',
                'TYPESCRIPT',
                'WEBPACK/PARCEL',
                'DOCKER',
                'PHOTOSHOP'
            ]
        };
    }
    render() {
        return (
            <div className='section-skills col col-lg-9'>
                <div className="u-center-text u-margin-bottom-medium u-margin-top-medium">
                    <h1 className='heading-secondary'>Tecnologies</h1>
                </div>
                <div className="section-skills__list">
                    <ul>
                        <h2 className="heading-terciary u-margin-bottom-small">
                            Proficient
                        </h2>
                        {this.state.proficient.map((value) => {
                            return <li>{value}</li>
                        })}
                    </ul>
                    <ul>
                        <h2 className="heading-terciary u-margin-bottom-small">
                            Knowledgeable
                        </h2>
                        {this.state.knowledgeable.map((value) => {
                            return <li>{value}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Skills