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

const CreatePostModal = ({ onClose, isOpen }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [file, setFile] = useState(false);

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

  const handleOnChange = (e) => {
    const file = e.target.files[0];

    if (
      file &&
      (file.type.startsWith('image/') || file.type.startsWith('video/'))
    ) {
      setFile(file);
      console.log('file :,', file);
    } else {
      setFile(null);
      alert('please select image or video');
    }
  };

  return (
    <div>
      <Modal size={'4xl'} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className='flex justify-between py-1 px-10 items-center'>
            <p>Create New Post</p>
            <Button
              className=''
              variant={'ghost'}
              size={'sm'}
              colorScheme='blue'
            >
              Share
            </Button>
          </div>
          <hr />

          <ModalBody>
            <div>
              <div className=''>
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

                {file && <img src={URL.createObjectURL(file)} alt='' />}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
