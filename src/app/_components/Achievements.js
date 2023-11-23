'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { achievements } from '../data/constants';
import ProfilePicture from 'public/images/developer-prabin.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiSolidLike } from 'react-icons/bi';
import { FaComment } from 'react-icons/fa6';
import { FaShareFromSquare } from 'react-icons/fa6';
import { BiSolidBadgeCheck } from 'react-icons/bi';
import { fireConfetti } from './confetti';

export default function Achievements({ setObserver }) {
  const [likes, setLikes] = useState(500);
  const [comments, setComments] = useState(60);
  const [shares, setShares] = useState(50);

  const handleLikes = e => {
    e.preventDefault();
    setLikes(likes + 1);
  };

  const handleShares = e => {
    e.preventDefault();
    setShares(shares + 1);
  };

  return (
    <div
      className='pt-20 p-5 bg-gradient-to-b from-[#261f3a] via-purple-800 to-[#261f3a]'
      id='achievements'
    >
      <div className='text-white font-bold text-4xl 2xl:text-6xl text-center mb-20'>
        Achievements and Awards
      </div>
      <div className='flex flex-col items-center justify-center '>
        <div className='m-5 w-full sm:w-1/2 lg:max-w-[600px] 4xl:max-w-[800px] h-full space-y-20'>
          {achievements.map((achievement, index) => {
            return (
              <div
                className='text-black flex flex-col p-5 rounded-2xl shadow-lg bg-[#ffffff]'
                key={index}
              >
                <div className='flex space-x-4 '>
                  <div className='w-14 h-14  overflow-hidden shadow-2xl rounded-full'>
                    <Image
                      src={ProfilePicture}
                      width={300}
                      height={300}
                      alt='profile picture'
                      className='object-cover'
                      unoptimized={true}
                    />
                  </div>
                  <div className='flex flex-col my-auto'>
                    <div className='flex space-x-1'>
                      <div className='font-semibold xl:text-lg'>
                        Prabin Basnet
                      </div>
                      <div className='flex flex-col justify-center text-blue-500'>
                        <BiSolidBadgeCheck />
                      </div>
                    </div>
                    {/* text-[#c7c7c7] */}
                    <div className=' font-extralight text-xs '>
                      Software Engineer
                    </div>
                  </div>
                </div>
                <div className='mt-5 text-md font-serif tracking-wider'>
                  {achievement.caption}
                </div>
                <div className='flex flex-wrap mt-3 '>
                  {achievement.hashTag.map((tag, index) => {
                    return (
                      <div
                        className='text-md font-semibold text-blue-500 pr-3'
                        key={index}
                      >
                        {tag}
                      </div>
                    );
                  })}
                </div>
                <div className='relative mt-5 w-auto h-[500px] 4xl:h-[800px]'>
                  <Image
                    src={achievement.image}
                    alt='profile picture'
                    className='object-cover'
                    fill
                    unoptimized={true}
                  />
                </div>
                <div className='text-black m-0 mt-5 flex justify-evenly space-x-5 bg-white backdrop-blur-md rounded-lg'>
                  <div
                    className='w-full p-3 rounded-lg flex items-center justify-center space-x-2 hover:cursor-pointer hover:bg-[#e8e8e8] transition ease-in-out delay-150 border'
                    onClick={e => handleLikes(e)}
                  >
                    <div className=''>
                      <BiSolidLike />
                    </div>

                    <div>{likes}</div>
                  </div>
                  <div className='w-full p-3 rounded-lg flex items-center justify-center space-x-2 hover:cursor-pointer hover:bg-[#e8e8e8] transition ease-in-out delay-150 border'>
                    <div className=''>
                      <FaComment />
                    </div>
                    <div>{comments}</div>
                  </div>
                  <div
                    className='w-full p-3 rounded-lg flex items-center justify-center space-x-2 hover:cursor-pointer hover:bg-[#e8e8e8] transition delay-150 duration-300 ease-in-out border'
                    onClick={e => handleShares(e)}
                  >
                    <div className=''>
                      <FaShareFromSquare />
                    </div>
                    <div>{shares}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
