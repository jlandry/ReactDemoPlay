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

    // store.subscribe(render)
    // document.getElementById('increment')
    //   .addEventListener('click', function () {
    //     store.dispatch({ type: 'INCREMENT' })
    //   })
    // document.getElementById('decrement')
    //   .addEventListener('click', function () {
    //     store.dispatch({ type: 'DECREMENT' })
    //   })
    // document.getElementById('incrementIfOdd')
    //   .addEventListener('click', function () {
    //     if (store.getState() % 2 !== 0) {
    //       store.dispatch({ type: 'INCREMENT' })
    //     }
    //   })
    // document.getElementById('incrementAsync')
    //   .addEventListener('click', function () {
    //     setTimeout(function () {
    //       store.dispatch({ type: 'INCREMENT' })
    //     }, 1000)
    //   })
}
export default forceUpdate;