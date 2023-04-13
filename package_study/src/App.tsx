import React from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Red>hello!</Red>
    </div>
  );
}

const Red = styled.div`
  color: red;
`

export default App;
