import React from 'react';
import './App.css';
import StateTesting from './StateTesting/StateTesting'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux'
import TicTacToe from './TicTacToe/TicTacToe';
import Store from './ReactDemo/Store';
// const store = createStore(Counter)

class App extends React.Component {
  render () {
   return (
     <div>
    {/* // <Provider store={store}> */}
    {/* <ConnectedRouter >  */}
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
          {/* <Switch> */}
        <Route exact path="/" component={StateTesting} />
        <Route path="/statetesting" component={StateTesting} />
        <Route path="/tictactoe" component={TicTacToe} />
      </div>
    </Router>
      {/* </Switch> */}
    {/* </ConnectedRouter> */}
  {/* // </Provider> */}
    </div>
   )
  }
}

    // <Router>
    //   <div>
     

    //   <Route exact path="/" component={StateTesting} />
    //   <Route path="/statetesting" component={StateTesting} />
    //   <Route path="/tictactoe" component={TicTacToe} />

    // </Router>
export default App;
