import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Routes from './routes';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="layout">
        <Header></Header>
            <div className="main-container container">
              <Routes></Routes>
            </div>
      </div>
    </div>
  );
}

export default App;
