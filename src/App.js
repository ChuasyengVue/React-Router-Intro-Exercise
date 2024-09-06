import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Home';
import Chocolate from './Chocolate';
import Coffee from './Coffee';
import Chips from './Chips';

import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/chocolate' element={<Chocolate />}></Route>
          <Route path='/coffee' element={<Coffee />}></Route>
          <Route path='/chips' element={<Chips />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
