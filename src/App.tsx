import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';

const Landing = lazy(() => import('./pages/LandingPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Landing />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
