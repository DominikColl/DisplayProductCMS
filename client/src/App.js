import React from 'react';
import logo from './logo.svg';
import Routes from './routes'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Router>
        
        <Link to='/'>Home</Link>
        <Link to='/login'>Log in</Link>

        <Routes/>
      </Router>

    </div>
  );
}

export default App;
