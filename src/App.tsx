import React from 'react';
import { useQuery } from 'react-query';
import axiosInstance from './utils/axiosInstance';

function App() {
  const { data } = useQuery(['news'], async () => {
    const response = await axiosInstance('everything?q=cars');
    return response.data;
  });

  console.log(data);

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
