import React, { Component } from 'react';
import Quest from './Quest';
import FormCheck from './FormCheck';

class Poll extends Component {
    constructor(props) {
        super(props);
        this.state = {
        /*Form-check*/   dl1: 0, dl2: 0, dl3: 0, dl4: 0, idquest: '', mang: [],
        /*Log-in*/       username: '', password: '',
        showform: false,
        }
      }
    
      //Hàm gọi khi nhấn nút "Đã khảo sát xong"
      ClickVote = () => {
        // console.log("dl1: " + this.state.dl1);
        // console.log("dl2: " + this.state.dl2);
        // console.log("dl3: " + this.state.dl3);
        // console.log("dl4: " + this.state.dl4);    

    
        this.state.mang.push(this.state.dl1); this.state.mang.push(this.state.dl2);
        this.state.mang.push(this.state.dl3); this.state.mang.push(this.state.dl4);
    
       
        //Xoá mảng trước
        if (this.state.mang.length > 4) {
          console.log('length: ' + this.state.mang.length);
          for (let i = 1; i < this.state.mang.length; i++) {
            this.state.mang.shift();
          }
        }
    
      }
    
      //Hàm gán ID câu hỏi
      validateQuest = () => {
        if (this.state.dl1 === 0) {
          this.state.idquest = 1;
        }
        else if (this.state.dl2 === 0) {
          this.state.idquest = 2;
        }
        else if (this.state.dl3 === 0)
          this.state.idquest = 3;
        else if (this.state.dl4 === 0)
          this.state.idquest = 4;
      }
    
      //Hàm kiểm tra check đủ câu hỏi chưa
      validateDeficient = () => {
        this.validateQuest();
        if (this.state.dl1 === 0 || this.state.dl2 === 0 || this.state.dl3 === 0 || this.state.dl4 === 0) {
          alert("Vui lòng khảo sát câu hỏi " + this.state.idquest);
          return false;
        }
      }
    
      //Hàm gán giá trị FormCheck
      callbackHandlerFunction = (click) => {
        // console.log("ket noi app");
        console.log(click);
        if (click < 6) {
          this.setState({ dl1: click });
        }
        else if (click > 6 && click < 11) {
          this.setState({ dl2: click });
        }
        else if (click > 10 && click < 16) {
          this.setState({ dl3: click });
        }
        else {
          this.setState({ dl4: click });
        }
      }
    
      //Hàm gọi SignIn
      submitSignIn = (user, pass) => {
        this.setState({
          username: user,
          password: pass,
        });
      }
    
      showformFunc =()=>{
        if(this.state.showform){
    
        }
      }
      render() {
        console.log("render");
        return (
          <div className="_bailuan">
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
              <div className="card-footer text-xs-center" >
                <div className="masthead">
                  <button data-toggle="modal" type="button" data-target="#myModal" className="btn btn-primary btn-sm float-right"  onClick={() => { if (window.confirm('Bạn chắc chắn đã chọn đúng hết ?')) this.ClickVote() } } >
                    Đã khảo sát xong</button>
                </div>
              </div>
            </div>
        );
      }
}

export default Poll;