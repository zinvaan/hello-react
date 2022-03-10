import React from 'react';
import {  BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App=()=>{
  return(
    <div>
      <ul>
        <li>
          <Link to ='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
      </ul>
      <hr/>
      <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/about' element={<About />}></Route>
       <Route path='/info' element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default App;