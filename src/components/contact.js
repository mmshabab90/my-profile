import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Meeyad Shabab</h2>
                        <img
                            src = "/assets/img/meeyad_photo.jpg"
                            alt = "avatar"
                            style = {{ height: '250px', borderRadius: '5%', }}
                        />
                        <p style = {{ width: '75%', margin: 'auto', paddingTop: '1em', }}>
                            For work in Front-End Development, Mobile Development, Software Testing or CMMI L-5 consultancy please get in touch with me.
                            You can reach me by using any of the mentioned methods.
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent 
                                        style={{ fontSize: '30px', fontFamily: 'Anton' }}
                                    >
                                        <i className="fa fas fa-phone" aria-hidden="true"/>
                                        (+47) 46 36 45 90
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent 
                                        style={{ fontSize: '30px', fontFamily: 'Anton' }}
                                    >
                                        <i className="fa fas fa-envelope" aria-hidden="true"/>
                                        mmshabab90@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent 
                                        style={{ fontSize: '30px', fontFamily: 'Anton' }}
                                    >
                                        <i className="fa fab fa-skype" aria-hidden="true"/>
                                        mshabab89
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}
