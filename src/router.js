import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Home from './components/containers/Home';
import Homes from './components/containers/Homes';
import Books from './components/containers/Books';
import Characters from './components/containers/Characters';
import HomeDetail from './components/containers/HomeDetail';
import BookDetail from './components/containers/BookDetail';
import CharacterDetail from './components/containers/CharacterDetail';
import NotFound from './components/containers/NotFound';
import Navigation from './components/layouts/Navigation';

export default (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Navigation>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/homes" component={Homes}/>
                <Route exact path="/books" component={Books}/>
                <Route exact path="/characters" component={Characters}/>
                <Route exact path="/home/:id" component={HomeDetail}/>
                <Route exact path="/book/:id" component={BookDetail}/>
                <Route exact path="/character/:id" component={CharacterDetail}/>
                <Route exact path="*" component={NotFound} />
            </Switch>
        </Navigation>
    </Router>
);