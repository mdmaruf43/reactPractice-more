import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Bangladesh'
        }
        console.log('LifecycleB constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecyleB getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifecyleB shouldcomponetUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecyleB getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('LifecyleB componentDidUpdte');
    }
    
    render() {
        console.log('LifecyleB render')
        return (
            <div>
                <h1>Lifecyle B</h1>
            </div>
        )
    }
}

export default LifecycleB
