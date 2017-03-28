import React,{ Component } from 'react';
import './Cards.css'

class Cards extends Component{
  constructor(props){
    super(props);
    this.cardClick=this.cardClick.bind(this);
  }
  cardClick(e){
    this.props.onCheck(e);

  }
  render(){
    return(
      <div className="box">
        <div className="card" onClick={this.cardClick} id="0"><div className="imgcard" id="imgcard0"></div></div>
        <div className="card" onClick={this.cardClick} id="1"><div className="imgcard" id="imgcard1"></div></div>
        <div className="card" onClick={this.cardClick} id="2"><div className="imgcard" id="imgcard2"></div></div>
        <div className="card" onClick={this.cardClick} id="3"><div className="imgcard" id="imgcard3"></div></div>
        <div className="card" onClick={this.cardClick} id="4"><div className="imgcard" id="imgcard4"></div></div>
        <div className="card" onClick={this.cardClick} id="5"><div className="imgcard" id="imgcard5"></div></div>
        <div className="card" onClick={this.cardClick} id="6"><div className="imgcard" id="imgcard6"></div></div>
        <div className="card" onClick={this.cardClick} id="7"><div className="imgcard" id="imgcard7"></div></div>
        <div className="card" onClick={this.cardClick} id="8"><div className="imgcard" id="imgcard8"></div></div>
        <div className="card" onClick={this.cardClick} id="9"><div className="imgcard" id="imgcard9"></div></div>




      </div>
    );
  }
}

export default Cards;
