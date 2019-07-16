import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App';
import Admin from '../Component/Admin';
import Nav from '../Component/Nav';
import Menu from '../Component/Menu';
import FormCheck from '../Component/FormCheck';
import About from '../Component/About';

import Quest from '../Component/Quest';
import Check from '../Component/Check';

class componentName extends Component {

    render() {
        return (
            
                <Router>
                    <div>
                        <Route exact path="/admin" component={Admin} />
                        {/* <Route exact path="/" component={Menu} />
                        <Route exact path="/" component={Nav} />
                        <Route exact path="/" component={About} />  */}
                        {/* <Route exact path="/" component={Quest} />
                        <Route exact path="/" component={Check} />  */}
                    </div>
                </Router>
            
        );
    }
}

export default componentName;
