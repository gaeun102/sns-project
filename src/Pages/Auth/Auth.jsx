import React from 'react';
import './Auth.css';
import Signin from '../../Components/Restar/Signin';
import { useLocation } from 'react-router-dom';
import Signup from '../../Components/Restar/Signup';

const Auth = () => {
  const location = useLocation();
  return (
    <div>
      <div className='flex items-center justify-center h-[100vh] space-x-5'>
        <div className='relative hidden lg:block'>
          <div className='h-[38.5rem] w-[29rem]'>
            <img
              className='h-full w-full '
              src='https://velog.velcdn.com/images/seonghyun015b/post/5b308742-be7d-4b56-a693-2216746704e7/image.png'
              alt=''
            />
            <div className='mobileWallpaper h-[33rem] w-[15.7rem] absolute top-6 right-14 '></div>
          </div>
        </div>
        <div className='w-[40vw] w-[30vw]'>
          {location.pathname === '/login' ? <Signin /> : <Signup />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
