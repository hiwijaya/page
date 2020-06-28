import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';


function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/" component={Landing} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
