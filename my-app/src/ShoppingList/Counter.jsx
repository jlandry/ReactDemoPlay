import React from 'react';

export default class Counter extends React.Component {
    render() {
        return ( 
            <button onClick = {this.props.onClick}> 
               Counter component  {this.props.count}
            </button>
        )
    }
}