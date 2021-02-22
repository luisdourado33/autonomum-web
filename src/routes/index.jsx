import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

/**
 * Pages
 */
import SignIn from '../pages/SignIn';

const Test = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}
export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/test" component={Test} />
            </Switch>
        </Router>
    );
}