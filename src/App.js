import React from 'react';
import Home from './Home';
import Profile from './Profile';
import Notifications from './Notifications';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default App;