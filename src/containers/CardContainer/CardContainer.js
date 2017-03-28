import React,{ Component } from 'react';
import { Cards,Count,GameEnd } from '../../components';
import $ from 'jquery';
import img1 from '../../img/1.png';
import img2 from '../../img/2.png'
import img3 from '../../img/3.png'
import img4 from '../../img/4.png'
import img5 from '../../img/5.png'

class CardContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      num: [ 1, 1, 2, 2, 3,
            3, 4, 4, 5, 5 ],
      cnt: 0,
      correct_cnt:0,
      prevclick: 0,
      Endbox_visible:"false"
    }

    console.log(this.state.num);
    this.gamecontrol=this.gamecontrol.bind(this);
  }

  gamecontrol(e){
    this.setState({
      cnt: ++this.state.cnt
    })

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
    let cardrotateback={
      transform: "rotateY(0deg)",
      transition: "transform 1s"
    }
    let imgcardrotateback={
      transform: "rotateY(180deg)",
      transition: "transform 1s"
    }

    card.css(cardrotate);
    imgcard.css(imgcardrotate);
    if(this.state.cnt%2===0){
      if(this.state.num[clickcardid]===this.state.num[this.state.prevclick]){
        setTimeout( function(prevclick) {

            imgcard.animate({opacity:'0.0'},1000);

            $("#imgcard"+prevclick).animate({opacity:'0.0'},1000);
        }, 1000,this.state.prevclick);
        this.setState({
          correct_cnt: ++this.state.correct_cnt
        })

      }
      else {
        setTimeout( function(prevclick) {
            card.css(cardrotateback);
            imgcard.css(imgcardrotateback);
            $("#"+prevclick).css(cardrotateback);
            $("#imgcard"+prevclick).css(imgcardrotateback);
        }, 1000,this.state.prevclick);
      }
    }
    if(this.state.correct_cnt===5){

      this.setState({
        Endbox_visible: "true"
      })

    }
    console.log(this.state.Endbox_visible);
    this.setState({
      prevclick: clickcardid
    })

  }
  componentDidMount(){
  this.setState({
    num: setting(this.state.num)
  })

  }
  render(){
    return(
      <div>
        <Cards onCheck={this.gamecontrol}/>
        <Count cnt={Math.ceil(this.state.cnt/2)} />
        <GameEnd visible={this.state.Endbox_visible} cnt={Math.ceil(this.state.cnt/2)}/>

      </div>
    );
  }
}


function setting(newarr){

  for(let c = newarr.length-1; c>0; c--){
    let b=Math.floor(Math.random() * (c+1));
    let a= newarr[c];
    newarr[c]=newarr[b];
    newarr[b] = a;
  }
  for(let j=0;10>j;j++){
    switch (newarr[j]) {
      case 1:
        $("#imgcard"+j).html(`<img style="width:100px;" src=${img1}>`);
        break;
      case 2:
        $("#imgcard"+j).html(`<img style="width:100px;" src=${img2}>`);
        break;
      case 3:
        $("#imgcard"+j).html(`<img style="width:100px;" src=${img3}>`);
        break;
      case 4:
        $("#imgcard"+j).html(`<img style="width:100px;" src=${img4}>`);
        break;
      case 5:
        $("#imgcard"+j).html(`<img style="width:100px;" src=${img5}>`);
        break;
      default:
    }
  }


  return newarr;
};

export default CardContainer;
