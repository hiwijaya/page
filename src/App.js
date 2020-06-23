import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Auth from './pages/Auth';

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup" component={Auth} />
                <Route path="/" component={Landing} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
