import React, { Component } from 'react';
// import { BrowserRouter as Link } from "react-router-dom";


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            password: '',
            USERADMIN: 'sano',
            PASSADMIN: '123',
        }
    }
    isChange = (event) => {
        console.log("user: " + event.target.value)
        this.setState({
            user_name: event.target.value,
        });
        // console.log("user_name: " + this.state.user_name);
    }
    isChangePassword = (event) => {
        console.log("pass: " + event.target.value)
        this.setState({
            password: event.target.value,
        });
        // console.log("password: " + this.state.password);
    }

    ValidationUser = () => {
        if (this.state.user_name !== this.state.USERADMIN) {
            // alert("false")
            return false;
        }

    }
    ValidationPass() {
        if (this.state.password !== this.state.PASSADMIN) {
            // alert("false")
            return false;
        }
    }

    async OnLogIn() {
        let params = this.state
        let errorUser = await this.ValidationUser(params);
        let errorPass = await this.ValidationPass(params);
        console.log('test: ',this.props.test);
        debugger;
        if (errorUser === false || errorPass === false) {
            return;
        }
            window.location.href="/admin"
            
     
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">Sano</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto my-2 my-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#about">Giới Thiệu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#khaosat">Khảo Sát</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#footer">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/#" className="nav-link js-scroll-trigger" data-toggle="modal" data-target="#loginModal" >Đăng nhập</a>
                                    <div className="modal" id="loginModal" tabIndex={-1} role="dialog">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Đăng nhập</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true" >×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <form className="form-signin">
                                                        <div className="form-label-group">
                                                            <label htmlFor="inputText">Tên đăng nhập</label>
                                                            <input type="text" id="inputText" className="form-control" placeholder="Tên đăng nhập"
                                                                onChange={(event) => this.isChange(event)} required autoFocus />
                                                        </div>
                                                        <div className="form-label-group">
                                                            <label htmlFor="inputPassword">Password</label>
                                                            <input type="password" id="inputPassword" className="form-control" placeholder="Mật khẩu"
                                                                onChange={(event) => this.isChangePassword(event)} required autoFocus />
                                                        </div>
                                                        <div className="checkbox mb-3">
                                                        </div>
                                                        <button className="btn btn-lg btn-primary btn-block" type="submit"
                                                            onClick={() => { this.OnLogIn(this.state.user_name, this.state.password) }}
                                                        >Đăng Nhập
                                                    </button>
                                                        <p className="mt-5 mb-3 text-muted text-center">© 2019-2020</p>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );

    }// <script src="/vendor/jquery/jquery.min.js"></script>
    // <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


    // <script src="/vendor/jquery-easing/jquery.easing.min.js"></script>
    // <script src="/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>

    // <script src="/js/creative.min.js"></script>
    componentDidMount = () => {


        const script = document.createElement("script");
        script.src = "/js/creative.js";
        // script.async = true;
        document.body.appendChild(script)

    }

}

export default Nav;