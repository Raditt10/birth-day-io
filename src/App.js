import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeInput from './HomeInput';
import CountdownDisplay from './CountdownDisplay';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomeInput />} />
        <Route path='/countdown/:name/:day/:month' element={<CountdownDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
