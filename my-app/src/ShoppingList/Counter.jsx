import React from 'react';

export default class Counter extends React.Component {
    render() {
        return ( 
            <div onClick = {this.props.onClick}> 
                Not Shopping Consoles the number after it {this.props.count}
            </div>
        )
    }
}