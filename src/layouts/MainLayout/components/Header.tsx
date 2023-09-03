import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
} from 'react-icons/ai';

export function Header() {
  return (
    <div className=' flex p-8 justify-between items-center'>
      <Link to='/'>
        <h1 className=' text-yellow-500 hover:text-yellow-400 text-2xl font-Newsreader font-semibold'>
          GlobeGazette
        </h1>
      </Link>
      <h1>search</h1>
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
