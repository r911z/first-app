import React from 'react';
import './App.css';

import logo from './logo.svg';
import Clock from './Components/Clock';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Página Principal de mi App </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenido a mi aplicación React.</p>
        <button onClick={() => alert('Aun estamos trabajando en esto.')}>Haz clic aquí</button>
      </header>

      <main className="app-main">
        <Clock></Clock>
        <button onClick={()=>console.log('test')}>Test Button</button>
      </main>
      
      <footer className="app-footer">
        <p>© 2024 Mi Aplicación de React</p>
      </footer>
    </div>
  );
}

export default App;