import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
} from 'react-icons/ai';
import { Search } from './Search';

export function Header() {
  return (
    <div className='flex py-8 px-12 justify-between items-center'>
      <Link to='/'>
        <h1 className=' text-indigo-500 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600 text-2xl font-Newsreader font-semibold'>
          GlobeGazette
        </h1>
      </Link>
      <div className='w-1/3 min-w-[268px]'>
        <Search />
      </div>
      <div className='flex gap-10'>
        <Link
          to='/login'
          className='flex items-center gap-2 text-lg hover:text-indigo-500'
        >
          Login <AiOutlineUser />
        </Link>
        <div className='w-[1px] h-8 bg-gray-300' />
        <Link
          to='/register'
          className='flex items-center gap-2 text-lg hover:text-indigo-500'
        >
          Register <AiOutlineUserAdd />
        </Link>
      </div>
    </div>
  );
}
