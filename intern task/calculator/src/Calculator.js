import React, { useState } from 'react';
import './Calculator.css'; // For styling

const Calculator = () => {
  const [selectedFunction, setSelectedFunction] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');

  const handleFunctionChange = (e) => {
    setSelectedFunction(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'input1') setInput1(value);
    else setInput2(value);
  };

  const handleNumberClick = (num) => {
    if (selectedFunction === 'Square Root') {
      setInput1(input1 + num);
    } else {
      if (input1 === '' || input2 !== '') setInput1(input1 + num);
      else setInput2(input2 + num);
    }
  };

  const calculateResult = () => {
    let res = 0;
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    switch (selectedFunction) {
      case 'Addition':
        res = num1 + num2;
        break;
      case 'Subtraction':
        res = num1 - num2;
        break;
      case 'Multiplication':
        res = num1 * num2;
        break;
      case 'Division':
        res = num1 / num2;
        break;
      case 'Square Root':
        res = Math.sqrt(num1);
        break;
      case 'Power':
        res = Math.pow(num1, num2);
        break;
      case 'Area of Polygon':
        res = (num1 * num2) / 2; // For simplicity, assuming area of a triangle
        break;
      case 'Area of Cylinder':
        res = Math.PI * num1 * num1 * num2; // πr²h
        break;
      case 'Surface Area of Cylinder':
        res = 2 * Math.PI * num1 * (num1 + num2); // 2πr(r + h)
        break;
      default:
        res = 'Invalid Operation';
    }
    setResult(res);
  };

  const clearInputs = () => {
    setInput1('');
    setInput2('');
    setResult('');
  };

  const renderNumberButtons = () => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return numbers.map((num) => (
      <button key={num} onClick={() => handleNumberClick(num)}>
        {num}
      </button>
    ));
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="input-container">
        <div>
          <label>Input 1:</label>
          <input
            type="text"
            name="input1"
            value={input1}
            onChange={handleInputChange}
          />
        </div>
        {selectedFunction !== 'Square Root' && (
          <div>
            <label>Input 2:</label>
            <input
              type="text"
              name="input2"
              value={input2}
              onChange={handleInputChange}
            />
          </div>
        )}
      </div>
      <div className="function-selector">
        <label>Choose Function:</label>
        <select value={selectedFunction} onChange={handleFunctionChange}>
          <option value="">Select</option>
          <option value="Addition">Addition</option>
          <option value="Subtraction">Subtraction</option>
          <option value="Multiplication">Multiplication</option>
          <option value="Division">Division</option>
          <option value="Square Root">Square Root</option>
          <option value="Power">Power</option>
          <option value="Area of Polygon">Area of Polygon</option>
          <option value="Area of Cylinder">Area of Cylinder</option>
          <option value="Surface Area of Cylinder">Surface Area of Cylinder</option>
        </select>
      </div>
      <div className="number-buttons">
        {renderNumberButtons()}
      </div>
      <div className="action-buttons">
        <button onClick={clearInputs}>Clear</button>
        <button onClick={calculateResult}>Calculate</button>
      </div>
      <div>
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
};

export default Calculator;
