import React from 'react'

export class TicTacToe extends React.Component{
    count = 0;
    newCount() { 
        if (this.count === 1){
            this.count = 0;
        } else {
            this.count = 1;
        }
        console.log(this.count);
        this.forceUpdate();
    }
    ButtonElement() {
        return <button onClick={this.newCount.bind(this)}>Click</button>;
    }
    render() {
        if(this.count === 1){
            return( 
                <div>
                     {this.ButtonElement()}
                    The count was One.
                </div>
            )
        } else {
            return(
                <div>
                {this.ButtonElement()}
                    The count was Zero
                </div>
            )
        }
    }  
}
export default TicTacToe;