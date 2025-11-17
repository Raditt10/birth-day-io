import React from 'react';
import './App.css';
import Birthday from './Birthday';
import { Route, Routes } from 'react-router-dom';
import RouterBirthday from './RouterBirthday';
import Generate from './Generate';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Birthday />} />
        <Route
          path='/birthday/:name?/:day?/:month?'
          element={<RouterBirthday />}
        />
        <Route path='/generate' element={<Generate />} />
      </Routes>
    </div>
  );
}

export default App;
