import React from 'react';
import './App.css';
import StateTesting from './StateTesting/StateTesting'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TicTacToe from './TicTacToe/TicTacToe';

class App extends React.Component {
  render () {
   return (
    <Router>
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/statetesting">State Testing</Link>
        </li>
        <li>
          <Link to="/tictactoe">Tic Tac Toe</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={StateTesting} />
      <Route path="/statetesting" component={StateTesting} />
      <Route path="/tictactoe" component={TicTacToe} />
    </div>
    </Router>
   )
  }
}

export default App;
