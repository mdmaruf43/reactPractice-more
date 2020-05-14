import React, { Component } from 'react'

class ClassComponentEventHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
    btnHandle = () => {
        console.log('Clicked')
    }
    
    render() {
        return (
            <div>
                <button onClick={this.btnHandle}>Click</button>
            </div>
        )
    }
}

export default ClassComponentEventHandling
