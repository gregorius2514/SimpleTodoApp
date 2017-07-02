import React, { Component } from 'react';
import axios from 'axios';
import './LoginComponent.css';

class LoginComponent extends Component {
    serverUrl = "http://localhost:8080/springDemo/auth";

    constructor() {
        super();
    }

    signIn(event) {
        //var login = $('#login').val();
        //var password = $('#password').val();
        //console.log(login + ' ' + password);
        /*
        axios.get(this.serverUrl + "", {
            params: {
                // postId: note.postId
            }
        }).then(response => {
            // this.setState({ notes: response.data });
        });
        */
        axios.get("http://localhost:8080/auth/login", {
            params: {
                login: this.state.login,
                password: this.state.password
            }
        }).then(response => {
            // this.setState({ notes: response.data });
            console.log(response);
        });
    }

    updateLogin(event) {
        this.setState({
            login: event.target.value
        });
    }

    updatePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    Login
                    <input onChange={(event) => this.updateLogin(event)} type="text" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                    password
                    <input onChange={(event) => this.updatePassword(event)} type="text" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <button onClick={(event) => this.signIn(event)}>Sign in</button>
                </div>
            </div>
        );
    }
}

export default LoginComponent;
