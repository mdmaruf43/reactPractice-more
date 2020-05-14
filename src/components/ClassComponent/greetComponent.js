import React, { Component } from 'react'
class GreetComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLogedIn: true,
        }
    }
    
    
    render() {
        //tarnari Operator Condition
        // return(
        //     this.state.isLogedIn ? (
        //         <h1>Hello, Virus</h1>
        //     ): (
        //         <h1>Hello, BD</h1>
        //     ) 
        // )

        // Short Circit Opertator
        return this.state.isLogedIn && <h1>Hello Virus</h1>


        // variable element approch
        // let message;
        // if(this.state.isLogedIn){
        //     message = <div>Hello Virus</div>
        // } else{
        //     message = <div>Hello BD</div>
        // }
        // return <h1>{message}</h1>

        // if(this.state.isLogedIn){
        //     return <div>Hello Virus</div>
        // } else{
        //     return <div>Hello Bangladesh</div>
        // }

        // return (
        //     <div>
        //         <h1>Maruf</h1>
        //     </div>
        // )
    }
}

export default GreetComponent
