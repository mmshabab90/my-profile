import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import  LandingPage  from './components/landingpage';
import { Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="demo-big-content">

    <Route exact path={`/`} render={ (routerProps) => < LandingPage routerProps={routerProps} />} />

        <Layout>
            <Header className="header-color" scroll 
            title={<strong><Link to="/">My Portfolio</Link></strong>}>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact Me</Link>
                </Navigation>
            </Header>
            <Drawer title="Menu">
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact Me</Link>
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

export default App;
