import React, { Component } from 'react';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplay: true
        }
    }
    render() {
        return (
            <header className="masthead" id="menu">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase text-white font-weight-bold">KhẢO SÁT VỀ SỰ LỰA CHỌN THỰC PHẨM CỦA SINH VIÊN </h1>
                            <hr className="divider my-4" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-white-75 font-weight-light mb-5">Bản khảo sát thực hiện tại trường Đại Học Văn Hiến</p>
                            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Giới Thiệu Chung</a>
                        </div>
                    </div>
                </div>
            </header>



        );
    }
}

export default Menu;
