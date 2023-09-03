import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';

const Landing = lazy(() => import('./pages/LandingPage'));

function App() {
  // const { data } = useQuery(['news'], async () => {
  //   const response = await axiosInstance('everything?q=cars');
  //   return response.data;
  // });

  // console.log(data);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default App;
