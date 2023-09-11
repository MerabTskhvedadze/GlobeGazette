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
  source: string;
};

export const Card = ({
  title,
  author,
  description,
  url,
  urlToImage,
  publishedAt,
  source,
}: cardProps) => {
  return (
    <article className='overflow-hidden rounded-lg shadow-lg h-full flex flex-col justify-between'>
      <div>
        <img
          alt='Placeholder'
          className='block h-[330px] w-full'
          src={urlToImage}
        />

        <header className='p-2 md:p-4'>
          <Link
            to={url}
            target='blank'
            className='hover:text-indigo-500 hover:underline'
          >
            <h1 className='text-lg'>{title}</h1>
          </Link>
          <p className='mt-2 text-grey-darker text-sm'>{description}</p>
          <p className='mt-2 italic text-sm'>{source}</p>
        </header>
      </div>

      <footer className='flex items-center justify-between leading-none p-2 md:p-4'>
        <p className='text-sm'>{author} </p>
        <p className='text-grey-darker text-sm'>{dateFormatter(publishedAt)}</p>
      </footer>
    </article>
  );
};
