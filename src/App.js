import React, { Component } from "react"
import "./App.css"
import Login from "./components/login/login"
import Home from "./components/home/home"
import ProtectedRoute from './protected.route/protected.route'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
    
    return (
      <div align="center" className="backGround">
        <nav>Some nav bar</nav>
         <BrowserRouter>
         
         <Switch>
        <Route exact path ="/" component = {Login}/>
        <ProtectedRoute exact path ="/home" component = {Home}/>
        <Route path ="*" component = {()=>"404 Not Found"}/>
        </Switch>
        </BrowserRouter>
      </div>
    )
  
}

export default App;