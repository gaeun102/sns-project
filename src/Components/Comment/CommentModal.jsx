import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import React from 'react';
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from 'react-icons/bs';
import CommentCard from './CommentCard';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import './CommentModal.css';

const CommentModal = ({
  onClose,
  isOpen,
  isSaved,
  isPostLiked,
  hadlePostLike,
  handleSavePost,
}) => {
  return (
    <div>
      <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className='flex h-[75vh] relative'>
              <div className='w-[45%] flex flex-col justify-center'>
                <img
                  className='max-h-full w-full'
                  src='https://cdn.pixabay.com/photo/2023/07/01/05/20/carniolan-honey-bee-8099474_640.jpg'
                  alt=''
                />
              </div>

              <div className=' w-[55%] pl-10'>
                <div className='flex justify-between items- py-5'>
                  <div className='flex items-center'>
                    <div>
                      <img
                        className='w-9 h-9 rounded-full'
                        src='https://cdn.pixabay.com/photo/2023/09/04/18/31/honey-bee-8233430_640.jpg'
                        alt=''
                      />
                    </div>
                    <div className='ml-2'>
                      <p>userName</p>
                    </div>
                  </div>
                  <BsThreeDots />
                </div>
                <hr />
                <div className='comment'>
                  {[1, 1, 1, 1, 1].map(() => (
                    <CommentCard />
                  ))}
                </div>
                <div className='absolute bottom-0 w-[50%]'>
                  <div className='flex justify-between items-center w-full py-4'>
                    <div className='flex item-center space-x-2'>
                      {isPostLiked ? (
                        <AiFillHeart
                          onClick={hadlePostLike}
                          className='text-xl hover:opacity-50 cursor-pointer text-red-500'
                        />
                      ) : (
                        <AiOutlineHeart
                          onClick={hadlePostLike}
                          className='text-2xl hover:opacity-50 cursor-pointer'
                        />
                      )}
                      <FaRegComment className='text-xl hover:opacity-50 cursor-pointer ' />
                      <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
                    </div>

                    <div className='cursor-pointer'>
                      {isSaved ? (
                        <BsBookmarkFill
                          onClick={handleSavePost}
                          className='text-2xl hover:opacity-50 cursor-pointer'
                        />
                      ) : (
                        <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' />
                      )}
                    </div>
                  </div>

                  <div className='w-full py-2'>
                    <p>10likes</p>
                    <p className='opacity-50 text-sm'>1 days ago</p>
                  </div>

                  <div className=''>
                    <div className='flex items-center w-full '>
                      <BsEmojiSmile />
                      <input
                        className='commentInput'
                        type='text'
                        placeholder='Add a comment...'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModal;
