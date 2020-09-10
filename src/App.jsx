import React, { lazy, Suspense } from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent/home';

const NavBar = lazy(() => import('./components/nav-bar/nav-bar'));

const renderLoader = () => <p>Loading</p>;

function App() {
  return (
    <>
      <Suspense fallback={renderLoader()}>
        <NavBar></NavBar>
        <section id="home">
          <HomeComponent></HomeComponent>
        </section>
        <section id="about"></section>
        <section id="experiences"></section>
        <section id="interest"></section>
        <section id="contact"></section>
        <footer></footer>
      </Suspense>
    </>
  );
}

export default App;
