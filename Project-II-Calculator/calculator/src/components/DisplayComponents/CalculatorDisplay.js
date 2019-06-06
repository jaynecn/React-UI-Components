import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="calc-display">
        <h1>0</h1>
      </div>
    );
  }

}


export default CalculatorDisplay;