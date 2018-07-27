import React from 'react';
import './ShoppingList.css'
import Counter from './Counter';

export class NotShoppingList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {'count': this.props.count};
    this.count = this.props.count;
  }
  
  getClick() { 
    this.count++
    this.setState({count : this.count});
    console.log('local var: ' + this.count, 'state var: ' + this.state.count);
  }
  render() {
      return ( 
          <Counter onClick = {this.getClick.bind(this)} count={this.count} />
      )
  }
}
export class ShoppingList extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {nameValue: this.props.name};
    this.count = 0;
    console.log(this.props)
  }

  componentWillReceiveProps(props) {
    // const { refresh, id } = this.props;
    if (props.name !== this.state.nameValue) {
      this.setState({nameValue: props.name});
    }
  }
  getClick() {
    console.log('clicked NotShoppingLIst', this.props.name)
  }
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <div onClick = {this.getClick.bind(this)}>Other Click</div>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
          <NotShoppingList count={this.props.count} />
      </div>
    );
  }
}

export default NotShoppingList;