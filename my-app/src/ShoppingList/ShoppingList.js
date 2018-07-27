import React from 'react';
import './ShoppingList.css'
import Counter from './Counter';

export class NotShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'count': 0};
  }
  
  getClick() { 
    this.setState({count : this.state.count + 1});
    console.log('clicked NotShoppingLIst',this.state.count );
  }
  render() {
      return ( 
          <Counter onClick = {this.getClick.bind(this)} count={this.state.count} />
      )
  }
}
export class ShoppingList extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {nameValue: this.props.name};
    this.count = 0;
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
          <NotShoppingList />
      </div>
    );
  }
}

export default NotShoppingList;