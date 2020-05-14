import React, { Component } from 'react'
import ChildComponent from '../FunctionalComponent/ChildComponent';

class ParaentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            parentNmae: 'Parent',
        }
        this.greetParent = this.greetParent.bind(this);
    }
    greetParent() {
        alert(`Hello ${this.state.parentNmae}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent  greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParaentComponent
