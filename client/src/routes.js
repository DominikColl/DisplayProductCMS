  
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login'
import Home from './home'
class Routes extends Component {
    state = {}
    render() {
        return (
            <div>
                <Switch>
                    {/* <Route exact path='/' component={Landing} /> */}
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login} />
                    {/* <Route exact path='/contact' component={Contact} /> */}

                </Switch>
            </div>
        );
    }
}

export default Routes;