import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/list-detail' element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;