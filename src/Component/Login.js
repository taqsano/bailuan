import React, { Component } from 'react';
import Admin from './Admin';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import styled from 'styled-components';
// import {PostDataService} from './../Service/PostDataService'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useradm:'sano',
            passwordadm:'123',
            admin:false,
        }
    }
    isChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value
        this.setState({
            [name]:value
        });
    }
    
    Login =()=>{
        if(this.state.user===this.state.useradm && this.state.pass===this.state.passwordadm){
            this.setState({
                admin:true
            });
        }else{
            return false;
        }
    }

    render() {
        return (    
            <Container>
            {!this.state.admin ?
            <section className="login-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 login-sec">
                            <h2 className="text-center">Đăng Nhập</h2>
                            <form className="login-form">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Username</label>
                                    <input type="text" className="form-control" name="user"
                                    onChange={(event) => this.isChange(event)} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1" className="text-uppercase" >Password</label>
                                    <input type="password" className="form-control" autoComplete="password" name="pass"
                                   onChange={(event) => this.isChange(event)} required/>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" />
                                        <small>Remember</small>
                                    </label>
                                    <a  className="btn btn-login float-right" onClick={()=>this.Login()}>Đăng Nhập</a>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-8 banner-sec">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                :
                window.location.href = "/admin"
            }
          </Container>
                
        );
    }
}

export default Login;
const Container = styled.div`
`