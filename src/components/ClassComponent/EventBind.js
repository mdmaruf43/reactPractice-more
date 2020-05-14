

import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hi Bro',
        }
        this.handleBtn = this.handleBtn.bind(this); 
    }
    handleBtn() {
        this.setState({
            message: 'YAY',
        })
        console.log(this);
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleBtn}>Click</button>
            </div>
        )
    }
}

export default EventBind


//this.handleBtn = this.handleBtn.bind(this);
{/* <button onClick={this.handleBtn.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.handleBtn()}>Click</button> */}
                
    // handleBtn = () => {
    //     this.setState({
    //         message: 'YAY!'
    //     })
    // }