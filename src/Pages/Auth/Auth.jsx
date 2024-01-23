import React from 'react';
import './Auth.css';
import Signin from '../../Components/Restar/Signin';

const Auth = () => {
  return (
    <div>
      <div className='flex items-center justify-center h-[100vh]'>
        <div className='relative hidden lg:block'>
          <div className='h-[38.3rem] w-[27rem]'>
            <img
              className='h-full w-full '
              src='https://velog.velcdn.com/images/seonghyun015b/post/5b308742-be7d-4b56-a693-2216746704e7/image.png'
              alt=''
            />
            <div className='mobileWallpaper h-[33rem] w-[15.7rem] absolute top-6 right-2'></div>
          </div>
        </div>
        <div>
          <Signin />
        </div>
      </div>
    </div>
  );
};

export default Auth;
