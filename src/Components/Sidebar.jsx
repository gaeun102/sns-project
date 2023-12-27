import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { mainu } from './SidebarConfig';

const Sidebar = () => {
  return (
    <div className='sticky top-0 h-[100vh]'>
      <div className='flex flex-col justify-between h-full'>
        <div>
            <div className='pt-10'>
            <img className='w-40' src="https://i.imgur.com/zqpwkLQ.png" alt="" /> {/* 인스타그램 로고*/}
          </div>
        <div className='mt-10'>
          {mainu.map((item) => (
            <div className='flex items-center mb-5 cursor-pointer text-lg'>
              {item.icon}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        </div>
        <div className='flex items-center cursor-pointer pb-10'>
          <IoReorderThreeOutline />
          <p className='ml-5'>More</p>
        </div>
      </div>

    </div>
  )
}

export default Sidebar