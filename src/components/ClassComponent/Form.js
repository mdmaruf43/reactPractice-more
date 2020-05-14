import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName: '',
            comments: '',
            topic: 'react',
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value,
        })
    }
    handleCommentsChanged = event => {
        this.setState({
            comments: event.target.value,
        })
    }
    handleTopicChange = event => {
        this.setState({
            topic: event.target.value,
        })
    }

    handleSubmit = e => {
        alert(`${this.state.userName}, ${this.state.comments}, ${this.state.topic}`);
        e.preventDefault();
    }
    render() {
        const {userName, comments, topic} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="">UserName</label>
                        <input
                            type="text" 
                            value={userName}
                            onChange={this.handleUserNameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Comments</label>
                        <textarea 
                            value={comments}
                            onChange={this.handleCommentsChanged}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Topic</label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
