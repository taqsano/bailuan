import React, { Component } from 'react';

// const API_LOGIN = 'http://localhost:3000/login'
class Admin extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-3">Admin</h1>
                    <p className="lead">Jumbo helper text</p>
                    <hr className="my-2" />
                    <p>More info</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Admin;