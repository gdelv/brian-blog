import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar';
import { Routes } from './routes';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes/>
      </main>
    </>
  );
}

export default App;
