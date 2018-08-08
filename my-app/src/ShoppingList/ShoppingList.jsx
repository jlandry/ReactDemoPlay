import React from 'react';
import './ShoppingList.css'
import Counter from './Counter';

export class NotShoppingList extends React.Component {
  state = {'count': this.props.count};
  
  constructor(props) {
    super(props);
    this.getClickCount.bind.this
  }
  
  componentWillReceiveProps(nextProps) {
    // const { refresh, id } = this.props;
    console.log(nextProps);
    if (nextProps.count !== this.props.count) {
      this.setState({count: nextProps.count});
      this.count = this.props.count;
    }
  }

  getClickCount(count) { 
    this.count = count + 1;
    console.log(this.count);
  }
  render() {
    this.count = this.props.count;
      return (
        <span>
          <button onClick={() => { this.getClickCount(this.count)}}> 
            Not Shopping increases count es6 {this.count}
          </button> 
          <button onClick={this.getClickCount.bind(this, this.count)}> 
            Not Shopping increases count bind'(this) '{this.count}
          </button> 
          <Counter onClick={() => { this.getClickCount(this.count)}} count={this.count} />

          <Counter onClick={() => {this.getClickCount.bind(this, this.count)}} count={this.count} />
        </span>
      )
  }
}

export class ShoppingList extends React.Component { 
  state = {name: this.props.name, count: this.props.count};

  handleChange(event) {
    console.log(event);
    this.setState({ name: event.currentTarget.value });
  }
  componentWillReceiveProps(nextProps) {
    // const { refresh, id } = this.props;
    console.log(nextProps);
    if (nextProps.name !== this.props.name) {
      this.setState({name: nextProps.name});
    }
    if (nextProps.count !== this.props.count) {
      this.setState({count: nextProps.count});
    }
  }

  getClick() {
    console.log('clicked ShoppingLIst', this.state.name)
  }
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.state.name}</h1>
        <button onClick = {this.getClick.bind(this)}>Click to console the state.name: {this.state.name}</button>
        {/* <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul> */}
        <div> Shoppinglist Count {this.state.count} </div>
          <NotShoppingList count={this.state.count} /><br/>
          <NotShoppingList count={this.state.count} /><br/>
          <NotShoppingList count={this.state.count} />
      </div>
    );
  }
}

export default NotShoppingList;