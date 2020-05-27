import React, { Component } from 'react'
import LifecycleB from './LifecycleTwoB';

class LifecycleTwoA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Bangladesh'
        }
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('LifecyleA componentDidMount');
    }

    
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Wellcome Bangladesh'
        })
    }
    render() {
        console.log('LifecycleA Render');   
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
            
        )
    }
}

export default LifecycleTwoA









