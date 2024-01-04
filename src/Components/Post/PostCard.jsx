import React, { useState } from 'react';
import { AiFillAlert, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill, BsThreeDots } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import './PostCard.css';

const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSavePost = () => {
    isSaved(!setIsSaved);
  };

  const hadlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <div>
      <div className='border rounded-md w-full'>
        <div className='flex justify-between items-center w-full py-4 px-5'>
          <div className='flex items-center'>
            <img
              className='h-12 w-12 rounded-full'
              src='https://cdn.pixabay.com/photo/2016/08/16/16/39/elephant-1598359_640.png'
              alt=''
            />
            <div className='pl-3'>
              <p className='font-semibold text-sm'>username</p>
              <p className='font-thin text-sm'>location</p>
            </div>
          </div>

          <div className='dropdown'>
            <BsThreeDots className='dots' onClick={handleClick} />
            <div className='dropdown-content'>
              {showDropDown && (
                <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>

        <div className='w-full'>
          <img
            className='w-full'
            src='https://cdn.pixabay.com/photo/2023/07/22/09/45/bee-8143028_640.jpg'
            alt=''
          />
        </div>

        <div className='flex justify-between items-center w-full px-5 py-4'>
          <div className='flex item-center space-x-2'>
            {isPostLiked ? (
              <AiFillHeart
                onClick={hadlePostLike}
                className='text-xl hover:opacity-50 cursor-pointer text-red-500'
              />
            ) : (
              <AiOutlineHeart
                onClick={hadlePostLike}
                className='text-xl hover:opacity-50 cursor-pointer'
              />
            )}
            <FaRegComment className='text-xl hover:opacity-50 cursor-pointer ' />
            <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
          </div>

          <div className='cursor-pointer'>
            {isSaved ? (
              <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' />
            ) : (
              <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
