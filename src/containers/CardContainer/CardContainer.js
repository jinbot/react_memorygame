import React,{ Component, PropTypes } from 'react';
import { Cards } from '../../components';
import $ from 'jquery';

class CardContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      num: [ 1, 1, 2, 2, 3,
            3, 4, 4, 5, 5 ],
      cnt: 0

    }
    this.state.num=shuffle(this.state.num);
    console.log(this.state.num);
    this.gamecontrol=this.gamecontrol.bind(this);
  }

  gamecontrol(e){
    let clickcardid=e.target.id;
    let card=$("#"+clickcardid);
    let imgcard=$("#imgcard"+clickcardid);
    let cardrotate={
      transform: "rotateY(180deg)",
      transition: "transform 1s"
    }
    let imgcardrotate={
      transform: "rotateY(0deg)",
      transition: "transform 1s"
    }

    card.css(cardrotate);
    imgcard.css(imgcardrotate);
    imgcard.prepend(this.state.num[clickcardid]);
  }
  render(){
    return(
      <div>
        <Cards onCheck={this.gamecontrol}/>
      </div>
    );
  }
}


function shuffle(newarr){
  for(var c = newarr.length-1; c>0; c--){
    var b=Math.floor(Math.random() * (c+1));
    var a= newarr[c];
    newarr[c]=newarr[b];
    newarr[b] = a;
  }
  return newarr;
};
export default CardContainer;
