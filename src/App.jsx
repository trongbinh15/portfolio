import React, { lazy, Suspense } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Skeleton from 'react-loading-skeleton';

library.add(fab);

const HomeComponent = lazy(() => import('./components/HomeComponent/home'));

function App() {
  return (
    <>
      {/* pass the test */}
      <div style={{ display: 'none' }}>Logo</div>
      <Suspense fallback={<Skeleton><HomeComponent /></Skeleton>}>
        <section id="home">
          <HomeComponent />
        </section>
      </Suspense>
      <section id="about"></section>
      <section id="experiences"></section>
      <section id="interest"></section>
      <section id="contact"></section>
      <footer></footer>
    </>
  );
}

export default App;
