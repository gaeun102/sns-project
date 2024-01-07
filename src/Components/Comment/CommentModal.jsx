import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

const CommentModal = (onClose, isOpen) => {
  return (
    <div>
      <Modal size={'4xl'} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className='flex h-[75vh]'>
              <div className='w-[45%] flex flex-col justify-center'>
                <img
                  className='max-h-full w-full'
                  src='https://cdn.pixabay.com/photo/2023/07/01/05/20/carniolan-honey-bee-8099474_640.jpg'
                  alt=''
                />
              </div>
              <div className='border w-[55]%'></div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModal;
