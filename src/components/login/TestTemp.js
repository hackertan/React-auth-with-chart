import React, { Component } from "react";
import axios from 'axios';
import auth from '../../auth/auth'
import './login.css'

export default class TestTemp extends Component{
  constructor() {
    super()
    this.state = {
      username: ' ',
      password: ' '
    };
    console.log(auth.isAuthenticated())
  }
  doLogin(username, password){
    if(auth.login(username.trim(),password.trim())){
        this.props.history.push("/home")
    } else {
        console.log("fails")
    }
  }
  changeUsername(event) {
    this.setState({ username: event.target.value });
  }
  changePassword(event) {
    this.setState({ password: event.target.value });
  }
  
  shakeIt(){alert("hi")}
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
          <button className="btn" onClick={()=>this.doLogin(this.state.username,this.state.password)}>Login</button>
        </div>
        <ul>
          {/* { this.state.employee.id} */}
        </ul>
      </div>
    )
  }

}