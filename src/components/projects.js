import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faReacteurope, faEmber, faJs } from '@fortawesome/free-brands-svg-icons';

export default class Projects extends Component {

    constructor(props) {
        super(props);
        // for the tabs count in the project page
        this.state = {activeTab: 0};
    }

    // project portfolio based on category
    toggleCategories() {
        // category: HTML+CSS
        if( this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/* project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '12px',}}>
                        <CardTitle style={{color: 'white', height:'176px', background: 'url(https://i.imgflip.com/35ks01.gif) center / cover'}} >
                            Coming Soon...
                        </CardTitle>
                        <CardText>
                            A landing page with a countdown timer. It is a small project created while learning HTML and CSS. The project uses flip clock jquery plugin.
                        </CardText>
                        <CardActions border>
                        <Button colored>
                            <a href="https://github.com/mmshabab90/front-end-web/tree/master/ComingSoon">
                                Github
                            </a>
                        </Button>
                        <Button colored>
                            <a href="https://mmshabab90.github.io/front-end-web/ComingSoon/index.html">
                                Demo
                            </a>
                        </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/* project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '12px',}}>
                        <CardTitle style={{color: 'white', height:'176px', background: 'url(https://i.imgflip.com/35ktsf.gif) center / cover'}} >
                            Health +
                        </CardTitle>
                        <CardText>
                            A landing page for an imaginary gym created with basic HTML and CSS. The website is not responsive and the contact number is a random number just for placeholder.
                        </CardText>
                        <CardActions border>
                        <Button colored>
                            <a href="https://github.com/mmshabab90/front-end-web/tree/master/LandingPages/HealthPlus">
                                Github
                            </a>
                        </Button>
                        <Button colored>
                            <a href="https://mmshabab90.github.io/front-end-web/LandingPages/HealthPlus/HealthPlus.html">
                                Demo
                            </a>
                        </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/* project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '12px',}}>
                        <CardTitle style={{color: 'white', height:'176px', background: 'url(https://i.imgflip.com/35kubh.gif) center / cover'}} >
                            Sushi Me
                        </CardTitle>
                        <CardText>
                            A landing page with a video background created using basic HTML and CSS. The page is created with some responsive feature in mind.
                        </CardText>
                        <CardActions border>
                        <Button colored>
                            <a href="https://github.com/mmshabab90/front-end-web/tree/master/LandingPages/SushiMe">
                                Github
                            </a>
                        </Button>
                        <Button colored>
                            <a href="https://mmshabab90.github.io/front-end-web/LandingPages/SushiMe/SushiMe.html">
                                Demo
                            </a>
                        </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }

        // category: React
        else if( this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    {/* project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '12px', }}>
                        <CardTitle style={{color: 'red', height:'176px', background: 'url(https://i.imgflip.com/35kv46.gif) center / cover'}} >
                            My Profile
                        </CardTitle>
                        <CardText>
                            This website is created with Reac while learning React JS. React Material Design Library is used for CSS styling. 
                            The page is hosted using github pages.
                            The website demonstrates a basic skill in React and is continuously updated as I learn react.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/mmshabab90/ToDo">
                                    Github                                    
                                </a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
                
            )
        }

        // category: React Native
        else if( this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    {/* project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '12px', }}>
                        <CardTitle style={{color: 'white', height:'176px', background: 'url(https://i.imgflip.com/31ptxy.gif) center / cover'}} >
                            ToDo App
                        </CardTitle>
                        <CardText>
                            A To Do app made in react-native.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/mmshabab90/ToDo">
                                    Github                                    
                                </a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/* project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '12px',}}>
                        <CardTitle style={{color: 'red', height:'176px', background: 'url(https://i.imgflip.com/31w1ja.gif) center / cover'}} >
                            Album App
                        </CardTitle>
                        <CardText>
                            A small react-native app that reads data from an API in JSON and displays in card view.
                        </CardText>
                        <CardActions border>
                        <Button colored>
                            <a href="https://github.com/mmshabab90/Albums-RN">
                                Github                                    
                            </a>
                        </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/* project 3*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '12px',}}>
                        <CardTitle style={{color: 'aqua', height:'176px', background: 'url(https://i.imgflip.com/31xaxf.gif) center / cover'}} >
                            Authentication App
                        </CardTitle>
                        <CardText>
                            A small react-native app that ensures user authentication using firebase.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/mmshabab90/auth-rn">
                                    Github                                    
                                </a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
                
            )
        }

        // category: Javascript
        else if( this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                    {/* project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '12px', }}>
                        <CardTitle style={{color: 'black', height:'176px', background: 'url(https://i.ibb.co/dcNvC8R/jsdemo1.png) center / cover'}} >
                            JS Bubble Demo
                        </CardTitle>
                        <CardText>
                            Small project to using JS bubble library.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://mmshabab90.github.io/jsdemo1/index.html">
                                    Demo                                    
                                </a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/* project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '12px',}}>
                        <CardTitle style={{color: 'aqua', height:'176px', background: 'url(https://i.ibb.co/yYwFfcB/Snap.png) center / cover'}} >
                            JS Snap Demo
                        </CardTitle>
                        <CardText>
                            Snap Thanos away!
                        </CardText>
                        <CardActions border>
                        <Button colored>
                            <a href="https://mmshabab90.github.io/snap/index.html">
                                Demo
                            </a>
                        </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }

        // category: EmberJS
        else if( this.state.activeTab === 4){
            return(
                <div className="projects-grid">
                    {/* project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '12px',}}>
                        <CardTitle style={{color: 'black', height:'176px', background: 'url(https://i.ibb.co/H7DsyrX/football-game-simulator.png) center / cover'}} >
                            Ember Footall Simulation
                        </CardTitle>
                        <CardText>
                            A small football gameboard simulator created using EmberJS and Tailwind CSS.
                        </CardText>
                        <CardActions border>
                        <Button colored>
                            <a href="https://github.com/mmshabab90/football-simulator">
                                Github
                            </a>
                        </Button>
                        <Button colored>
                            <a href="https://mmshabab90.github.io/football-simulator/">
                                Demo
                            </a>
                        </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Tabs activeTab={ this.state.activeTab } 
                onChange={ (tabId) => this.setState({ activeTab: tabId })} ripple className="tab-content" >
                    <Tab><i className="fa fa-html5" aria-hidden="true"/> + <i class="fa fa-css3" aria-hidden="true"/></Tab>
                    <Tab><FontAwesomeIcon icon={faReact} /></Tab>
                    <Tab><FontAwesomeIcon icon={faReacteurope} /></Tab>
                    <Tab><FontAwesomeIcon icon={faJs} /></Tab>
                    <Tab><FontAwesomeIcon icon={faEmber} /></Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            { this.toggleCategories() }
                        </div>
                    </Cell>
                </Grid>           
             </div>
        )
    }
}
