import React, {Component} from 'react';

class Message extends Component {
    constructor(){
        super()
        this.state = {
            massage: 'Welcome visitor', 
            count: 0
        }
    }
    changeMessage(){
        this.setState({
            massage: 'Thank you for subscribing'
        })
    }
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
        this.interval = this.setState(this.tick, 1000);
    }
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render(){
        return (
            <div>
                <h1>{this.state.massage}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        
        )
    }
}

export default Message;


