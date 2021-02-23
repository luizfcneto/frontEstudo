import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          HELLO WORLD! App page
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h3> Body </h3>
      <br/>

      {/* Adicionando um link redirecionando para o Component Sobre */}
      <Link to="/sobre"> Página Sobre </Link>


    </div>
  );
}

export default App;
