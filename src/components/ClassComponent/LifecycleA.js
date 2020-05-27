import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Bangladesh'
        }
        console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecyleA getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifecyleA shouldcomponetUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecyleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('LifecyleA componentDidUpdte');
    }
    
    handleChanged = () => {
        this.setState({
            name: 'Welcome Bangladesh'
        })
    }
    render() {
        console.log('LifecyleA render');
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.handleChanged}>State Changed</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA

