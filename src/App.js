// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';         // Importing Home component
import Profile from './Profile';   // Importing Profile component
import Messages from './Messages'; // Importing Messages component
import Login from './Login';       // Importing Login component
import SignUp from './SignUp';     // Importing SignUp component

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
