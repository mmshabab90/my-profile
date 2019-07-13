import React, {Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import  LandingPage  from './components/landingpage';
import Main from './components/main';
import { Route, Link } from "react-router-dom";


export default class App extends Component {
 
    hideToggle() {
        var drawer_container = document.getElementsByClassName('mdl-layout')[0]; 
        // # no IDs in the html code.
        drawer_container.querySelector('.mdl-layout__drawer').addEventListener('click', function () {
        var obfuscator = document.querySelector('.mdl-layout__obfuscator');
        if (obfuscator.classList.contains('is-visible')) {
            obfuscator.classList.remove('is-visible');
            this.classList.remove('is-visible');
  }
}, false);        
    }
    
    render() {
        return (
            <div className="demo-big-content">

            <Route exact path={`/`} render={ (routerProps) => < LandingPage routerProps={routerProps} />} />

                <Layout>
                    <Header className="header-color" scroll 
                    title={<strong>
                        <Link to="/" onClick={() => this.hideToggle()}><img
                            src={process.env.PUBLIC_URL + '/assets/img/logo.png'}
                            alt="avatar"
                            className="logo"/>
                        </Link></strong>}>
                        <Navigation>
                            <Link to="/resume" onClick={() => this.hideToggle()}>Resume</Link>
                            <Link to="/projects" onClick={() => this.hideToggle()}>Projects</Link>
                            <Link to="/contact" onClick={() => this.hideToggle()}>Contact Me</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Menu">
                        <Navigation>
                            <Link to="/" onClick={() => this.hideToggle()}>Home</Link>
                            <Link to="/resume" onClick={() => this.hideToggle()}>Resume</Link>
                            <Link to="/projects" onClick={() => this.hideToggle()}>Projects</Link>
                            <Link to="/contact" onClick={() => this.hideToggle()}>Contact Me</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
        );
    }
}