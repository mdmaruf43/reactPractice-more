import React, { Component } from 'react'

class LifecycleTwoB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Mauf Ahmed'
        }
        console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
    }
    
    componentDidMount(){
        console.log('LifecyleB componentDidMount');
    }

    render() {
        console.log('LifecycleB Render');   
        return <h3>Lifecycle B</h3>
    }
}

export default LifecycleTwoB













// shouldComponentUpdate(){
//     console.log('LifecycleB shouldComponentUpdate');
//     return true;
// }

// getSnapshotBeforeUpdate(prevProps, prevState){
//     console.log('LifecycleB getSnapshotBeforeUpdate');
//     return null;
// }

// componentDidUpdate() {
//     console.log('LifecycleB componentDidUpdate')
// }
