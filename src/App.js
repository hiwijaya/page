import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Auth from './pages/Auth';

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signin" render={(props) => ( <Auth {...props} form={Auth.SIGN_IN} /> )} />
                <Route path="/signup" render={(props) => ( <Auth {...props} form={Auth.SIGN_UP}/> )} />
                <Route path="/" component={Landing} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
