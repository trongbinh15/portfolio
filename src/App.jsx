import React from 'react';
import './App.css';
import NavBar from './components/nav-bar/nav-bar';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <section id="home"></section>
      <section id="about"></section>
      <section id="experiences"></section>
      <section id="interest"></section>
      <section id="contact"></section>
      <footer></footer>
    </>
  );
}

export default App;
