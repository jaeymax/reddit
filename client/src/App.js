import React from 'react';
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  
  return (
    <div style={{backgroundColor:'#0B1416'}} className='h-screen px-3' >
        <Navbar/>
        <div className='flex' >
        <Sidebar/>

        </div>
    </div>
  )
}

export default App;
//We are going to need this later so guys