import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ShoppingList} from './ShoppingList/ShoppingList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Jonathan.';
  }
  changeName() {
    console.log(this.name);
    if (this.name === 'Jonathan.'){
      this.name = 'notJonathan.';
    } else {
      this.name = 'Jonathan.';
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div onClick={this.changeName.bind(this)}>Click Me!</div>
        <ShoppingList name={this.name} onClick={this.changeName.bind(this)}/>
      </div>
    );
  }
}

export default App;
