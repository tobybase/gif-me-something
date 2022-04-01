import React from 'react';
import SearchGiphy from './searchGiphy';
import './index.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>React GIF me something</h1>
        <SearchGiphy />
      </div>
    </div>
  );
}

export default App;
