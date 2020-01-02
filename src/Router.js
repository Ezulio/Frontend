import React from 'react';
import {    
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import Error from './pages/404.js';
import Navbar from './component/Navbar'
import Hasil from './pages/Hasil';
export default function router() {
    return (
        <Router>
            <Navbar />
            <div style={{padding:16}}>
            <Switch >
                <Route component={Hasil} path='/hasil'/>
                <Route path='/' exact component={Landing} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route component={Error} />
            </Switch>
            </div>
        </Router>
    )
}