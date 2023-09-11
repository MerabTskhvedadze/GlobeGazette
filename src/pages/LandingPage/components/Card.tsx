import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormatter } from '../../../utils/dateFormatter';

type cardProps = {
  title: string;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
};

export const Card = ({
  title,
  author,
  description,
  url,
  urlToImage,
  publishedAt,
}: cardProps) => {
  return (
    <div>
      <div className={` bg-[url(${urlToImage})]`}>
        {/* <img className=' h-2' src={urlToImage} alt='' /> */}
      </div>
    </div>
  );
};
