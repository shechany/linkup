import React, { Component } from 'react';
import Register from "./register";
// import './App.css';
import {Col,Row} from "reactstrap";
import axios from "axios";    
import { ReactDOM } from 'react-dom';

class Login extends Component {
    
  render() {
    
    return (
      <div className="login-form">
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input"/>
          Check me out
        </label>
      </div><br/>
      <button type="submit" className="btn buttons">L o g i n</button>
        <br/>
      
    </div>
    );
  }
}

export default Login;
