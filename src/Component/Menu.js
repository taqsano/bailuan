import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import Launch from './Launch';
import About from './About';
import Poll from './Poll';
import NotFound from './NotFound';
import Login from './Login';
import Admin from './Admin';

class Menu extends Component {
    render() {
        return (
            <Router>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            {/*---- Include the above in your HEAD tag --------*/}
            <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="/#">Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                    <Link to ="/"className="nav-link" >
                      <i className="fa fa-home" />
                      Home
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to ="/about" className="nav-link" >
                      <i className="fa fa-info" aria-hidden="true">
                      </i>
                      Giới thiệu
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/poll" className="nav-link" >
                      <i className="fa fa-braille" aria-hidden="true">               
                      </i>
                      Khảo Sát
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" >
                      <i className="fa fa-user-secret" aria-hidden="true">
                        <span className="badge badge-info"></span>
                      </i>
                      Đăng Nhập Admin
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
             {/* end nav */}
              <Switch>
              <Route path="/" exact component={Launch} />
              <Route path="/about" exact component={About} />
              <Route path="/poll" exact component={Poll} />
              <Route path="/login" exact component={Login} />
              <Route path="/admin" component={Admin} />
              <Route component={NotFound} />
              </Switch>
            </Router>
        );
    }
}

export default Menu;
