import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes></Routes>
      <Link to="/contacts">Contact</Link>
    </div>
  );
}

export default App;
