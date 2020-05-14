
import React, { Component } from 'react'
class Cunter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleCount(){
        // this.setState({
        //     count: this.state.count + 1,
        // }, () => {
        //     console.log('Callback value ', this.state.count);
        // })
        // console.log(this.state.count);

        this.setState((prevState) => ({
            count: prevState.count + 1,
        }), () => {
            console.log(this.state.count)
        })
        console.log(this.state.count);
    }
    incrementFive(){
        this.handleCount();
        this.handleCount();
        this.handleCount();
        this.handleCount();
        this.handleCount();
    }
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}
export default Cunter


        // this.setState({
        //     count: this.state.count + 1
        // }, ()=> console.log('Callback Value: ', this.state.count))
        // console.log(this.state.count);
// Note

// Always make use of setState and never modify the state directly. 
// Code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method.
// When you have to update state based on the previos state value, pass in a function as an argument insted of the regular object. 

