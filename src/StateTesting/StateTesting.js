import React from 'react'
import {ShoppingList} from '../ShoppingList/ShoppingList';
import TableContainer from '../CarModel/CarComponent';
import logo from '../logo.svg';
import ForceUpdate from './ForceUpdate';

class StateTesting extends React.Component {
  state = {name: 'Jonathan.', count: 0};
  constructor(props) {
    super(props);
    this.changeCount = this.changeCount.bind(this);
    this.changeName = this.changeName.bind(this);
  }
  
  changeName() {
    if (this.state.name === 'Jonathan.'){
      this.setState({name: 'notJonathan.'});
    } else {

      this.setState({name: 'Jonathan.'});
    }
    console.log(this.name);
  }

  changeCount() {
      this.setState({count: this.state.count +1 });
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
        <button onClick={this.changeName}>Click Me to change the name on the parent App. {this.state.name}</button>
        <br/>
        <button onClick={this.changeCount}>Click Me to change the Count on the parent App. {this.state.count}</button>
        <ShoppingList name={this.state.name} onClick={this.changeName} count={this.state.count} />
        <TableContainer />
        <ForceUpdate/>
      </div>
    );
  }
}
export default StateTesting;