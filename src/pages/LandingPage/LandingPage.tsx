import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Pagination } from 'antd';
import { animateScroll } from 'react-scroll';
import axiosInstance from '../../utils/axiosInstance';

import { Card } from './components';
import { serverDataTypes } from '../../types/serverDataType';

function LandingPage() {
  // const [page, setPage] = useState<number>(1);

  const { data, isError } = useQuery(['news'], async () => {
    const response = await axiosInstance.get(
      `top-headlines?country=us&pageSize=10&page=1`
    );
    return response.data;
  });

  // const pageChangeHandler = (page: number) => {
  //   setPage(page);
  //   animateScroll.scrollToTop({
  //     duration: 1500,
  //     smooth: 'easeInOutQuart',
  //   });
  // };

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
            source,
          }: serverDataTypes) => {
            return (
              <Card
                key={title}
                title={title}
                description={description}
                url={url}
                urlToImage={urlToImage}
                author={author}
                publishedAt={publishedAt}
                source={source.name}
              />
            );
          }
        )}
      </div>
      {/* <div className='mx-auto my-10 w-fit'>
        <Pagination
          defaultCurrent={1}
          total={data?.totalResults}
          onChange={(page) => pageChangeHandler(page)}
        />
      </div> */}
    </>
  );
}

export default LandingPage;
