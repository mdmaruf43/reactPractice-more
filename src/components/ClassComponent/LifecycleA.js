import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Mauf Ahmed'
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
            name: 'Wellcome Maruf'
        })
    }
    render() {
        console.log('LifecycleA Render');   
        return (
            <div>
                <div>{this.state.name}</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
            
        )
    }
}

export default LifecycleA
