import React, { Component } from 'react'

export class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Welcome Maruf',
        }
    }

    handleBtn(){
        this.setState({
            message: 'Thank you for subscribe'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.handleBtn()}>Subscribe</button>
            </div>
        )
    }
}

export default State
