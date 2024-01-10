import React from 'react';

const SearchUserCard = () => {
  return (
    <div className='py-2 '>
      <div className='flex items-center'>
        <img
          className='w-10 h-10 rounded-full'
          src='https://cdn.pixabay.com/photo/2016/11/29/20/22/girl-1871104_640.jpg'
          alt=''
        />

        <div className='ml-3'>
          <p>Full name</p>
          <p className='opacity-70'>username</p>
        </div>
      </div>
    </div>
  );
};

export default SearchUserCard;
