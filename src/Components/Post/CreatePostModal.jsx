import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPhotoVideo } from 'react-icons/fa';
import './CreatePostModal.css';
import { GrEmoji } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { uploadToCloudnary } from '../../Config/UploadToCloudnary';
import { createPostAction } from '../../Redux/Post/Action';

const CreatePostModal = ({ onClose, isOpen }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [file, setFile] = useState(false);
  const [caption, setCaption] = useState();
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState('');
  const [location, setLocation] = useState('');
  const token = localStorage.getItem('token');

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (
      droppedFile.type.startWith('image/') ||
      droppedFile.type.startWith('video/')
    ) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleOnChange = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return; // 파일이 없는 경우 처리하지 않음
    }

    if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
      const imgUrl = await uploadToCloudnary(file);
      setImageUrl(imgUrl);
      setFile(file);
      console.log('file :,', file);
    } else {
      setFile(null);
      alert('please select image or video');
    }
  };

  const handleCaptiononChange = (e) => {
    setCaption(e.target.value);
  };

  const handleCreatePost = () => {
    const data = {
      jwt: token,
      data: {
        caption,
        location,
        image: imageUrl,
      },
    };
    dispatch(createPostAction(data)); // data를 dispatch에 전달해야 함
    onClose();
  };

  return (
    <div>
      <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className='flex justify-between py-1 px-10 items-center'>
            <p>Create New Post</p>
            <Button
              className=''
              variant={'ghost'}
              size={'sm'}
              colorScheme='blue'
              onClick={handleCreatePost}
            >
              Share
            </Button>
          </div>
          <hr />

          <ModalBody>
            <div className='h-[70vh] justify-between pb-5 flex'>
              <div className='w-[50%]'>
                {!file && (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className='h-full drag-drop'
                  >
                    <div>
                      <FaPhotoVideo className='text-3xl' />
                      <p>Drag Photos or Videos Here</p>
                    </div>

                    <label htmlFor='file-upload' className='custom-file-upload'>
                      Select From Computer
                    </label>
                    <input
                      className='fileInput'
                      type='file'
                      id='file-upload'
                      accept='image/*,video/*'
                      onChange={handleOnChange}
                    />
                  </div>
                )}

                {file && (
                  <img
                    className='max-h-full'
                    src={URL.createObjectURL(file)}
                    alt=''
                  />
                )}
              </div>
              <div className='w-[1px] border h-full'></div>

              <div className='w-[50%]'>
                <div className='flex items-center px-2'>
                  <img
                    className='w-7 h-7 rounded-full'
                    src='https://cdn.pixabay.com/photo/2023/07/02/18/49/cup-8102791_640.jpg'
                    alt=''
                  />
                  <p className='font-semibold ml-4'>username</p>
                </div>

                <div className='px-2'>
                  <textarea
                    placeholder='Write a caption'
                    className='captionInput'
                    name='caption'
                    rows='8'
                    onChange={handleCaptiononChange}
                  ></textarea>
                </div>

                <div className='flex justify-between px-2'>
                  <GrEmoji />
                  <p className='opacity-70'>{caption?.length} /2,200</p>
                </div>

                <hr />

                <div className='p-2 flex justify-between items-center'>
                  <input
                    onClick={(e) => setLocation(e.target.value)}
                    className='locationInput'
                    type='text'
                    placeholder='location'
                    name='location'
                  />
                  <GoLocation />
                </div>
                <hr />
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
