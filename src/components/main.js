// all routes go here and is a stateless component
import React from 'react';
import {HashRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
        </Switch>
    </HashRouter>
    
)

export default Main;