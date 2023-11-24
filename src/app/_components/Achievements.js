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
import { FaRetweet } from 'react-icons/fa6';
import { motion } from 'framer-motion';

import { fireConfetti } from './confetti';

const achievementVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
};

export default function Achievements({ setObserver }) {
  const [likes, setLikes] = useState({});
  const [retweet, setRetweet] = useState({});
  const [shares, setShares] = useState({});

  useEffect(() => {
    achievements.forEach(achievement => {
      setLikes(prevLikes => ({
        ...prevLikes,
        [achievement.id]: achievement.likes,
      }));
      setRetweet(prevRetweet => ({
        ...prevRetweet,

        [achievement.id]: achievement.retweet,
      }));
      setShares(prevShares => ({
        ...prevShares,
        [achievement.id]: achievement.shares,
      }));
    });
  }, []);

  const handleLikes = (e, achievementId) => {
    e.preventDefault();
    setLikes(prevLikes => ({
      ...prevLikes,
      [achievementId]: prevLikes[achievementId]
        ? prevLikes[achievementId] + 1
        : 1,
    }));
  };

  const handleRetweet = (e, achievementId) => {
    e.preventDefault();
    setRetweet(prevRetweet => ({
      ...prevRetweet,
      [achievementId]: prevRetweet[achievementId]
        ? prevRetweet[achievementId] + 1
        : 1,
    }));
  };

  const handleShares = (e, achievementId) => {
    e.preventDefault();
    setShares(prevShares => ({
      ...prevShares,
      [achievementId]: prevShares[achievementId]
        ? prevShares[achievementId] + 1
        : 1,
    }));
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
        <div className='m-5 w-full md:max-w-[600px] 4xl:max-w-[800px] h-full space-y-20'>
          {achievements.map(achievement => {
            return (
              <motion.div
                variants={achievementVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{
                  once: true,
                }}
                className='text-black flex flex-col p-5 rounded-2xl shadow-lg bg-[#ffffff]'
                key={achievement.id}
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
                    className='w-full p-3 rounded-lg flex items-center justify-center space-x-3 hover:cursor-pointer hover:bg-[#fdfdfd]  border'
                    onClick={e => handleLikes(e, achievement.id)}
                  >
                    <motion.button
                      whileTap={{ scale: 2.9 }}
                      whileHover={{ scale: 2.1 }}
                      className=''
                    >
                      <BiSolidLike />
                    </motion.button>

                    <div className='font-thin font-mono'>
                      {likes[achievement.id]}
                    </div>
                  </div>
                  <div
                    className='w-full p-3 rounded-lg flex items-center justify-center space-x-3 hover:cursor-pointer hover:bg-[#fdfdfd] transition ease-in-out delay-150 border'
                    onClick={e => handleRetweet(e, achievement.id)}
                  >
                    <motion.button
                      whileTap={{ scale: 2.9 }}
                      whileHover={{ scale: 2.1 }}
                      className=''
                    >
                      <FaRetweet />
                    </motion.button>
                    <div className='font-thin font-mono'>
                      {retweet[achievement.id]}
                    </div>
                  </div>
                  <div
                    className='w-full p-3 rounded-lg flex items-center justify-center space-x-3 hover:cursor-pointer hover:bg-[#fdfdfd] transition delay-150 duration-300 ease-in-out border'
                    onClick={e => handleShares(e, achievement.id)}
                  >
                    <motion.button
                      whileTap={{ scale: 2.9 }}
                      whileHover={{ scale: 2.1 }}
                      className=''
                    >
                      <FaShareFromSquare />
                    </motion.button>
                    <div className='font-thin font-mono'>
                      {shares[achievement.id]}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
