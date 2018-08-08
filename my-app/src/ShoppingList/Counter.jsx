import React from 'react';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.count = this.props.count;
        }
    componentWillReceiveProps(nextProps) {
        const { refresh, id } = this.props;
        console.log(nextProps);
        if (nextProps.count !== this.props.count) {
            this.count = nextProps.count;
            console.log(this.props.count)
        }
    }
    render() {
        return ( 
            <button onClick = {this.props.onClick}> 
               Counter component {this.count}
            </button>
        )
    }
}