import React from 'react';

const SuggestionCard = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <img
          className='w-9 h-9 rounded-full'
          src='https://cdn.pixabay.com/photo/2023/08/14/15/42/milkyway-8190232_640.jpg'
          alt=''
        />
        <div>
          <p className='text-sm font-semibold'>username</p>
          <p className='text-sm domt-semibold opacity-70m'>Follows You</p>
        </div>
      </div>
      <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  );
};

export default SuggestionCard;
