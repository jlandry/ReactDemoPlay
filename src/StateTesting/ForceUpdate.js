import React from 'react'

export class forceUpdate extends React.Component{
    count = 0;
    state = {count: 0}
    NewCount() { 
        if (this.count === 1){
            this.count = 0;
        } else {
            this.count = 1;
        }
        console.log(this.count);
        this.forceUpdate();
    }
    NewStateCount() { 
        if (this.state.count === 1){
            this.setState({count: 0});
        } else {
            this.setState({count: 1});
        }
    }
    ForceButtonElement() {
        return <button onClick={this.NewCount.bind(this)}>Click</button>;
    }
    StateButtonElement() {
        return <button onClick={this.NewStateCount.bind(this)}>Click</button>;
    }
    render() {
        return( 
            <div>
                    {this.ForceButtonElement()}
                The count was {this.count ===1 ?"One":'Zero'} (forced).
                {this.StateButtonElement()}
                The State count is {this.state.count ===1 ?"One":'Zero'}.
            </div>
        )
    }  
}
export default forceUpdate;