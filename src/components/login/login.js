import React, { Component } from "react";
import axios from 'axios';
import auth from '../../auth/auth'
import './login.css'

export default class login extends Component{
  constructor() {
    super()
    this.state = {
      username: ' ',
      password: ' '
    };
    console.log(auth.isAuthenticated())
  }
  
  changeUsername(event) {
    this.setState({ username: event.target.value });
  }
  changePassword(event) {
    this.setState({ password: event.target.value });
  }
  render(props) {
    return (
      <div align="center" className="loginContainer">
        <h1>Hi, please login</h1>
        <p>Login stuff</p>
        <div className="loginDiv">
          <p>Username</p>
          <input type="text" className="logins" name="username"
            value={this.state.username} onChange={this.changeUsername.bind(this)}></input>
          <p>Password</p>
          <input type="password" className="logins" name="password"
            value={this.state.password} onChange={this.changePassword.bind(this)}></input><br></br>
          <button className="btn" onClick={() => {
            auth.login(this.state.username,this.state.password,() => {
              this.props.history.push("/home");
            })
          }}>Login</button>
        </div>
        <ul>
          {/* { this.state.employee.id} */}
        </ul>
      </div>
    )
  }

}