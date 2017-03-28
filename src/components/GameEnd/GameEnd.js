import React,{ Component, } from 'react';
import './GameEnd.css';
import $ from 'jquery';

class GameEnd extends Component{
  constructor(props){
    super(props);
    this.regame=this.regame.bind(this);
  }
  regame(){
    location.reload();
  }
  componentWillReceiveProps(nextProps){


    if(nextProps.visible=="true"){

      $(".box").remove();
      $(".CountBox").remove();
      $(".Endbox").fadeIn(1000);
      $(".Endbox").css({"height":$(window).height()+"px"});
    }else{
      $(".Endbox").fadeOut(0);
    }
  }
  render(){

    return(
      <div className="Endbox">
        <div className="wrap">
          <input type="button" className="btn" onClick={this.regame} value="다시 게임하기" />
          <br/>
          <h4>{this.props.cnt}번에 성공!</h4>
        </div>
      </div>
    );
  }
}

export default GameEnd;
