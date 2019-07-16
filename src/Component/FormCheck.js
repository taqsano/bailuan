import React, { Component } from 'react';

class FormCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dl: '',
        }
    }
    handleClick = (dl) => {
        // console.log("dl: ",this.state.dl);
        this.props.handleClickParent(dl);
      
    }

    setForm() {
        return (
            <div>
                <ul className="list-group" >
                    <li className="list-group-item">
                        <div className="radio">
                            <label>
                                <input type="radio" id={this.props.id1} name={this.props.radioName} onClick={()=>this.handleClick(this.props.id1)} /> Luôn Luôn
                                        </label>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="radio">
                            <label>
                                <input type="radio" id={this.props.id2} name={this.props.radioName} onClick={()=>this.handleClick(this.props.id2)} /> Thường xuyên
                                        </label>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="radio">
                            <label>
                                <input type="radio" id={this.props.id3} name={this.props.radioName} onClick={()=>this.handleClick(this.props.id3)} /> Thỉnh Thoảng
                                        </label>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="radio">
                            <label>
                                <input type="radio" id={this.props.id4} name={this.props.radioName} onClick={()=>this.handleClick(this.props.id4)} /> Hiếm Khi
                    </label>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="radio">
                            <label>
                                <input type="radio" id={this.props.id5} name={this.props.radioName} onClick={()=>this.handleClick(this.props.id5)} /> Không bao giờ
                            </label>
                        </div>
                    </li>
                    {/*ket thuc FormCheck */}
                </ul>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.setForm()}
            </div>
        );
    }
}

export default FormCheck;