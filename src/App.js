import React from 'react';
import './App.css';
import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className="line">
        <Conversor moedaA='CAD' moedaB='BRL'/>
        <Conversor moedaA='BRL' moedaB='CAD'/>
      </div>
      <div className="line">
        <Conversor moedaA='USD' moedaB='BRL'/>
        <Conversor moedaA='BRL' moedaB='USD'/>
      </div>
      <div className="line">
        <Conversor moedaA='EUR' moedaB='BRL'/>
        <Conversor moedaA='BRL' moedaB='EUR'/>
      </div>
    </div>
  );
}

export default App;
