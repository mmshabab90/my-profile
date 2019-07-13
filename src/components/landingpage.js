import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

import Particles from 'react-particles-js';

const particleOption = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 500
            }
        }
    }
}

export default class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <Particles 
                            params = {particleOption}
                            className="particles"
                        />
                        <img
                            src={process.env.PUBLIC_URL + '/assets/img/logo.png'}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Front-End Web Developer</h1>
                            <hr/>
                            <p>
                                HTML/CSS | Bootstrap | React | React Native | EmberJS | Python | Android-Kotlin 
                            </p>
                            <div className="social-links">
                                {/* linkedin */}
                                <a 
                                href="https://www.linkedin.com/in/meeyad-mohd-shabab/"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <i className="fa fab fa-linkedin" aria-hidden="true"/>
                                </a>
                                {/* github */}
                                <a 
                                href="https://github.com/mmshabab90"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <i className="fa fab fa-github-alt" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
