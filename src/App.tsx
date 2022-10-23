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
        <div className="container">
          <div className="row">
            <div className="col-xs-12 main-container">
              <Routes></Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
