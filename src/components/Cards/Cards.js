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
        <div className="card" onClick={this.cardClick} id="10"><div className="imgcard" id="imgcard10"></div></div>
        <div className="card" onClick={this.cardClick} id="11"><div className="imgcard" id="imgcard11"></div></div>
        <div className="card" onClick={this.cardClick} id="12"><div className="imgcard" id="imgcard12"></div></div>
        <div className="card" onClick={this.cardClick} id="13"><div className="imgcard" id="imgcard13"></div></div>
        <div className="card" onClick={this.cardClick} id="14"><div className="imgcard" id="imgcard14"></div></div>
        <div className="card" onClick={this.cardClick} id="15"><div className="imgcard" id="imgcard15"></div></div>
        <div className="card" onClick={this.cardClick} id="16"><div className="imgcard" id="imgcard16"></div></div>
        <div className="card" onClick={this.cardClick} id="17"><div className="imgcard" id="imgcard17"></div></div>
        <div className="card" onClick={this.cardClick} id="18"><div className="imgcard" id="imgcard18"></div></div>
        <div className="card" onClick={this.cardClick} id="19"><div className="imgcard" id="imgcard19"></div></div>



      </div>
    );
  }
}

export default Cards;
