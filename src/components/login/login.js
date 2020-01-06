import React, { Component } from "react";
import axios from 'axios';
import auth from '../../auth/auth'
import './login.css'
import $ from 'jquery'

export default class login extends Component{
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
        document.getElementById("error").style.display="block"
        if(document.getElementsByClassName("shaker").length==0){
          document.getElementById("loginContainer").classList.remove("shaker2")
          document.getElementById("loginContainer").classList.add("shaker")
        } else {
          document.getElementById("loginContainer").classList.remove("shaker")
          document.getElementById("loginContainer").classList.add("shaker2")
        }
    }
  }
  changeUsername(event) {
    this.setState({ username: event.target.value });
  }
  changePassword(event) {
    this.setState({ password: event.target.value });
  }
  componentDidMount(){
  }
  
  render(props) {
    return (
      <div align="center" className="loginContainer" id="loginContainer">
        <h1>Hi, please login</h1>
        <br></br>
        <p id="error">Invalid login</p>
        <div className="loginDiv" id="loginDiv">
          <div className="posSetter" >
          <input type="text" className="logins" name="username" id="username" required
            onChange={this.changeUsername.bind(this)}></input><label>Username</label>
            </div>
            <br></br><br className="bigLine"></br>
            <div className="posSetter" >
          <input type="password" className="logins" name="password" id="password" required
            onChange={this.changePassword.bind(this)}></input><label>Password</label></div><br></br><br></br>
          <button className="btn btn-primary large" onClick={()=>this.doLogin(this.state.username,this.state.password)}>Login</button>
        </div>
        <ul>
          {/* { this.state.employee.id} */}
        </ul>
      </div>
    )
  }

}