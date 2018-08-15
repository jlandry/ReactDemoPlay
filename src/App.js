import React from 'react';
import './App.css';
import StateTesting from './StateTesting/StateTesting'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux'
import TicTacToe from './TicTacToe/TicTacToe';
import store from './ReactDemo/Store';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './ReactDemo/Actions';

  // Log the initial state
  console.log(store.getState());
  
  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the listener
  const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )
  
  // Dispatch some actions
  store.dispatch(addTodo('Learn about actions'))
  store.dispatch(addTodo('Learn about reducers'))
  store.dispatch(addTodo('Learn about store'))
  store.dispatch(toggleTodo(0))
  store.dispatch(toggleTodo(1))
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
  
  // Stop listening to state updates
  unsubscribe()

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
