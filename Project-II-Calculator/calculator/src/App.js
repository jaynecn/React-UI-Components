import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calc-app">
      <div className="div-row"><CalculatorDisplay /></div>
      <div className="div-row"><ActionButton text="clear"/><NumberButton buttonStyle="red-btn" text="%"/>
      </div>
      <div className="div-row"><NumberButton buttonStyle="white-btn" text="7"/><NumberButton buttonStyle="white-btn" text="8"/><NumberButton buttonStyle="white-btn" text="9"/><NumberButton buttonStyle="red-btn" text="X"/></div>
      <div className="div-row"><NumberButton buttonStyle="white-btn" text="4"/><NumberButton buttonStyle="white-btn" text="5"/><NumberButton buttonStyle="white-btn" text="6"/><NumberButton buttonStyle="red-btn" text="-"/></div>
      <div className="div-row"><NumberButton buttonStyle="white-btn" text="1"/><NumberButton buttonStyle="white-btn" text="2"/><NumberButton buttonStyle="white-btn" text="3"/><NumberButton buttonStyle="red-btn" text="+"/></div>
      <div className="div-row"><ActionButton text="0"/><NumberButton buttonStyle="red-btn" text="="/></div>
      

      
    </div>
  );
};

export default App;
