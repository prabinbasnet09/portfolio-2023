'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import {
  faShareFromSquare,
  faThumbsUp,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

export default function Achievements() {
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
    <>
      <div className='mt-10 p-5'>
        <div className='text-white font-bold text-4xl 2xl:text-6xl text-center mb-10'>
          Achievements and Awards
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='m-5 w-full sm:w-1/2 lg:max-w-[600px] h-full rounded-2xl border shadow-lg'>
            <div className='flex flex-col p-5'>
              <div className='flex space-x-4 '>
                <div className='w-14 h-14 rounded-full overflow-hidden'>
                  <Image
                    src='/images/developer-prabin.webp'
                    width={100}
                    height={100}
                    alt='profile picture'
                    className='object-cover'
                  />
                </div>
                <div className='flex flex-col my-auto'>
                  <div className='font-semibold'>Prabin Basnet</div>
                  <div className=' font-extralight text-xs text-[#c7c7c7]'>
                    Software Engineer
                  </div>
                </div>
              </div>
              <div className='mt-5 '>
                Winning the IT Web Code Challenge 2023 organized by the
                University of Louisiana Monroe!!
              </div>
              <div className='mt-5'>
                <div className='w-full'>
                  <Image
                    src='/images/developer-prabin.webp'
                    width={600}
                    height={200}
                    alt='profile picture'
                    className='object-cover'
                  />
                </div>
              </div>
              <div className='text-black m-0 mt-5 flex justify-around bg-white backdrop-blur-md rounded-lg'>
                <div className=' p-3 rounded-lg flex space-x-2'>
                  <div
                    className='hover:cursor-pointer'
                    onClick={e => handleLikes(e)}
                  >
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </div>

                  <div>{likes}</div>
                </div>
                <div className='p-3 rounded-lg flex space-x-2'>
                  <div className='hover:cursor-pointer'>
                    <FontAwesomeIcon icon={faComment} />
                  </div>
                  <div>{comments}</div>
                </div>
                <div className='p-3 rounded-lg flex space-x-2'>
                  <div
                    className='hover:cursor-pointer'
                    onClick={e => handleShares(e)}
                  >
                    <FontAwesomeIcon icon={faShareFromSquare} />
                  </div>
                  <div>{shares}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
