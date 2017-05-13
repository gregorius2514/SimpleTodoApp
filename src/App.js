import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
    urlRoot = "https://jsonplaceholder.typicode.com";

    constructor() {
        super();

        this.state = {
            events: []
        }
    }

    handleSubmit(event) {
        // this.state.comments.push(event)
        console.log(event);
    }
    componentDidMount() {
        this.getRepos();

    }
    getRepos() {
        axios.get("http://jsonplaceholder.typicode.com/posts/1/comments").then(response => {
            this.setState({ events: response.data });
        });
    }

    render() {
        let comments = this.state.events.map(function (item) {
            return <div id={item.postId} className="note">
                <div className="title">{item.name}</div>
                <div className="bodyText">{item.body}</div>
                <div className="email">{item.email}</div>
            </div>
        });

        return (
            <div className="App">
                <div className="App-header">
                    <h2>Simple app</h2>
                </div>
                <div>
                    <div>
                        {comments}
                    </div>
                </div>

                <form id="add-form" onSubmit={this.handleSubmit}>
                    <input id='create' ref="description" type='text' placeholder='Add Something to the list!' />
                </form>
            </div>
        );
    }
}

export default App;
