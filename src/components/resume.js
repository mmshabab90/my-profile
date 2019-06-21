import React, { Component } from 'react'
import { Grid, Cell, Button } from 'react-mdl';
import Education from './resumeComponent/education';
import Experience from './resumeComponent/experience';
import Skills from './resumeComponent/skills';

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4} style={{textAlign: 'center'}}>
                        <div style={{textAlign: 'center'}}>
                            <Grid>
                                <Cell col={12}>
                                    <img src= {process.env.PUBLIC_URL + "/assets/img/my_pic.jpg"}
                                        alt="avatar"
                                        style={{height: '200px', borderRadius: '50%', marginBottom: '2em', justifyContent: 'enter'}} />                                </Cell>
                                <Cell col={12}>
                                    <Button raised accent>
                                        <a href={process.env.PUBLIC_URL + "/assets/Meeyad_CV.pdf"} style={{color:'white', textDecoration: 'none'}}>
                                            CV in pdf
                                        </a>
                                    </Button>
                                </Cell>
                            </Grid>
                        </div>
                        <h2 style={{paddingTop: '5px'}}>Meeyad Shabab</h2>
                        <h4 style={{color: 'grey'}}>Programmer and Tech Enthusiast</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%', margin:'auto'}} />
                        <p>
                            A freelance developer having around 4 years experience in software QA. Also passionate about front-end and mobile application development.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%', margin:'auto'}} />
                        <h5>Address</h5>
                        <p>Harald Bothners Veg. 6, 7052-Trondheim</p>
                        <h5>Phone#</h5>
                        <p>(+47) 46 36 45 90</p>
                        <h5>Email</h5>
                        <p>mmshabab90@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%', margin:'auto'}} />
                    </Cell>

                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education
                            startYear={2017}
                            endYear={2019}
                            schoolName = "NTNU"
                            degreeName = "Msc. Embedded Systems"
                            
                            />

                        {/* section break */}
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        {/* section break */}
                        <h2>Experience</h2>

                        {/* section break */}
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        {/* section break */}

                        <h2>Skills</h2>
                        <Skills 
                            skill = "JavaScript"
                            progress = {80}
                            />

                        {/* section break */}
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        {/* section break */}

                        <h2>Volunteer Work</h2>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
