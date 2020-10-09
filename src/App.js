import React from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import { Routes } from './routes';
import styled from 'styled-components';
import { Gray } from './colors';

function App() {
  const MainContainer = styled.main`
    background:${Gray} 
  `
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <MainContainer>
        <Routes/>
      </MainContainer>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
