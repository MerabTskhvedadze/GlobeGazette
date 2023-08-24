import React from 'react';
import { useQuery } from 'react-query';
import axiosInstance from './utils/axiosInstance';

function App() {
  // const { data } = useQuery(['news'], async () => {
  //   const response = await axiosInstance('everything?q=bitcoin');
  //   return response.data;
  // });

  return (
    <>
      <div className='bg-black w-16 h-16'></div>
    </>
  );
}

export default App;
