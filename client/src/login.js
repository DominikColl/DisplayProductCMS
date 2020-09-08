import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Login extends React.Component {
    constructor(){
        super()
    }
render(){
    return(
        <div>
        <h2>Welcome to login page</h2>
  
        <form>
        <label>Name</label>
        <input id='name' name='name' type='text'></input>
        <label>Password</label>
        <input id='password' name='password' type='text'></input>
        <button type='submit'>Submit</button>
        </form>
      </div>
    )
}
}

export default Login;
