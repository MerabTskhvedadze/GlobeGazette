import React from 'react';

import { Card } from './components';
import { useQuery } from 'react-query';
import axiosInstance from '../../utils/axiosInstance';
import { dateFormatter } from '../../utils/dateFormatter';

function LandingPage() {
  const { data, isError } = useQuery(['news'], async () => {
    const response = await axiosInstance.get('top-headlines?country=us');
    return response.data;
  });

  return (
    <>
      <div className='grid items-start md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-5 px-10 mt-5'>
        {data?.articles?.map(
          ({
            title,
            author,
            description,
            url,
            urlToImage,
            publishedAt,
          }: {
            title: string;
            author: string;
            description: string;
            url: string;
            urlToImage: string;
            publishedAt: string;
          }) => {
            return (
              <Card
                title={title}
                description={description}
                url={url}
                urlToImage={urlToImage}
                author={author}
                publishedAt={publishedAt}
              />
            );
          }
        )}
      </div>
      <div className='mx-auto my-10 w-fit'>pagination</div>
    </>
  );
}

export default LandingPage;
