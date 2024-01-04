import React from 'react';
import StoryCircle from '../../Components/Story/StoryCircle';

export const HomePage = () => {
  return (
    <div>
      <div>
        <div className='w-[44%] px-10'>
          <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
            {[1, 1, 11].map((item) => (
              <StoryCircle />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
