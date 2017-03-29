import React, { Component } from 'react';
import { CardContainer,BoardContainer } from './containers';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
       <div>
         <ul>
           <li><Link to="/">Memory Game</Link></li>
           <li><Link to="/tictactoe">tictactoe Game</Link></li>
         </ul>

         <hr/>

         <Route exact path="/" component={CardContainer}/>
         <Route  path="/tictactoe" component={BoardContainer}/>

       </div>
     </Router>
    );
  }
}

export default App;
