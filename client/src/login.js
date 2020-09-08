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
    state={name:'',password:''}
    constructor(){
        super()
    }
    handleChange=event=>{
        const {target}=event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
const {name}=target
this.setState({
    [name]:value
})
    }
    handleSubmit=async (event)=>{
event.preventDefault()
console.log(this.state)
// const {name,password}=this.state
// console.log(name+password)
    }
render(){
    return(
        <div>
        <h2>Welcome to login page</h2>
  
        <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input id='name' name='name' type='text' onChange={this.handleChange}></input>
        <label>Password</label>
        <input id='password' name='password' type='text' onChange={this.handleChange}></input>
        <button type='submit'>Submit</button>
        </form>
      </div>
    )
}
}

export default Login;
