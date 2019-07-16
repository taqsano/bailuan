import React, { Component } from 'react';

class Quest extends Component {
    render() {
        return (
            <div className="card-header" id="khaosat">
                    <h3 className="card-header"><img src={this.props.anhtieude} alt="" /></h3>
                    <h5>{this.props.IDcauhoi}</h5>
                    <h3>{this.props.textcauhoi}</h3>
            </div>
        );
    }
}

export default Quest;