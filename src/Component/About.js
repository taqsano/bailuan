import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className="page-section bg-primary" id="about">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">Nội dung khảo sát</h2>
                            <hr className="divider light my-4" />
                            <p className="text-white-50 mb-4">Khảo sát được thực hiện nhằm đưa ra thống kê về việc tiêu thụ thực phẩm của sinh viên trường ĐH Văn Hiến nói riêng và sinh viên Việt Nam</p>
                            <a className="btn btn-light btn-xl js-scroll-trigger" href="#khaosat">Bắt Đầu!</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
