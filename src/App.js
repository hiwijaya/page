import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './utils/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';


function App() {

    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <Route path="/" component={Landing} />
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
