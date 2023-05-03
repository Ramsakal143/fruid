import React from 'react';
import './App.css';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import Request from './components/Request';
import { Route,Routes } from 'react-router-dom';
import Sign from './components/Sign';
import Start from './components/Start';
import Schedule from './components/Schedule';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/request' element={<Request/>} />
        <Route path='/sign' element={<Sign/>} />
        <Route path='/start' element={<Start/>} />
        <Route path='/schedule' element={<Schedule/>} />
      </Routes>
    </div>
  );
}

export default App;
