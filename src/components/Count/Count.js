import React,{ Component, PropTypes } from 'react';
import './Count.css';

class Count extends Component{

  render(){
    return(
      <div className="CountBox">
        <h1>{this.props.cnt}번째 시도</h1>
      </div>
    );
  }
}

export default Count;
