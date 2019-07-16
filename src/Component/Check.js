import React, { Component } from 'react';
import FormCheck from './FormCheck.js';
import Quest from './Quest';
class Check extends Component {
    render() {
        return (
            <div>
                <div className="row">
            <div className="col-md-6">
              <Quest texttieude="text" anhtieude="/img/portfolio/thumbnails/4.jpg" IDcauhoi="Câu Hỏi 1" textcauhoi="Bạn ăn 3 bữa /ngày " />
              <FormCheck handleClickParent={(click) => this.callbackHandlerFunction(click)} radioName="radio1"
                id1="1" id2="2" id3="3" id4="4" id5="5"
              />
            </div>
            <div className="col-md-6">
              <Quest texttieude="text" anhtieude="/img/portfolio/thumbnails/4.jpg" IDcauhoi="Câu Hỏi 2" />
              <FormCheck handleClickParent={(click) => this.callbackHandlerFunction(click)} radioName="radio2"
                id1="6" id2="7" id3="8" id4="9" id5="10"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Quest texttieude="text" anhtieude="/img/portfolio/thumbnails/4.jpg" IDcauhoi="Câu Hỏi 3" />
              <FormCheck handleClickParent={(click) => this.callbackHandlerFunction(click)} radioName="radio3"
                id1="11" id2="12" id3="13" id4="14" id5="15"
              />
            </div>
            <div className="col-md-6">
              <Quest texttieude="text" anhtieude="/img/portfolio/thumbnails/4.jpg" IDcauhoi="Câu Hỏi 4" />
              <FormCheck handleClickParent={(click) => this.callbackHandlerFunction(click)} radioName="radio4"
                id1="16" id2="17" id3="18" id4="19" id5="20"
              />
            </div>
          </div>
            </div>
        );
    }
}

export default Check;