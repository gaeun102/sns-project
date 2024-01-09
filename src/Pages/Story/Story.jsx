import React from 'react';
import StoryViwer from '../../Components/StroyComponents/StoryViwer';

const Story = () => {
  const story = [
    {
      image:
        'https://images.pexels.com/photos/19600002/pexels-photo-19600002.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    },
    {
      image:
        'https://images.pexels.com/photos/19600002/pexels-photo-19600002.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    },
    {
      image:
        'https://images.pexels.com/photos/17504586/pexels-photo-17504586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      image:
        'https://images.pexels.com/photos/19770768/pexels-photo-19770768.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    },
    {
      image:
        'https://images.pexels.com/photos/19770768/pexels-photo-19770768.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    },
  ];
  return (
    <div>
      <StoryViwer stories={story} />
    </div>
  );
};

export default Story;
