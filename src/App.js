import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Messages from './Messages';
import Login from './Login';
import { useAuth } from './AuthContext';

const App = () => {
    const { user } = useAuth();

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/profile">
                    {user ? <Profile /> : <Redirect to="/login" />}
                </Route>
                <Route path="/messages">
                    {user ? <Messages /> : <Redirect to="/login" />}
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default App;
