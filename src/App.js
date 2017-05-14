import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
    urlRoot = "https://jsonplaceholder.typicode.com";

    constructor() {
        super();

        this.state = {
            notes: [],
            noteName: ''
        }
    }
    componentDidMount() {
        this.getRepos();

    }

    getRepos() {
        axios.get("http://jsonplaceholder.typicode.com/posts/1/comments").then(response => {
            this.setState({ notes: response.data });
        });
    }

    saveNote() {
        if (this.state.noteName === '') {
            return;
        }
        let notes = this.state.notes.slice();
        notes.push({
            name: this.state.noteName
        });
        this.setState({
            notes: notes,
            noteName: ''
        });

    }

    deleteNote(note) {
        var array = this.state.notes;
        var index = array.indexOf(note)
        array.splice(index, 1);
        this.setState({ notes: array });
    }

    updateTextValue(event) {
        this.setState({
            noteName: event.target.value
        })
    }

    setNoteAsDone(event) {
        console.log(event.target);
    }

    render() {
        let comments = this.state.notes.map((item) => {
            return <div id={item.postId} className="note">
                <div className="title">{item.name}</div>
                <div className="remove-note-buttons-left" onClick={(event) => this.setNoteAsDone(event)}>
                    <a href="#">
                        <i className="glyphicon glyphicon-ok"></i>
                    </a>
                </div>
                <div className="remove-note-buttons-right" onClick={(event) => this.deleteNote(item)}>
                    <a href="#">
                        <i className="glyphicon glyphicon-remove"></i>
                    </a>
                </div>
            </div>
        });

        return (
            <div className="i-am-centered">
                <div className="row">
                    <h1>Simple note app</h1>
                    <div className="input-group note">
                        <input className="form-control" type='text' placeholder="Your's new note" value={this.state.noteName}
                            onChange={(event) => this.updateTextValue(event)} />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={(event) => this.saveNote()}>
                                <i className="glyphicon glyphicon-saved"></i>
                            </button>
                        </span>
                    </div>
                    <div>
                        {comments}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
