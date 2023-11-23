import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaCopyright } from 'react-icons/fa';

import Link from 'next/link';

export function Footer() {
  return (
    <div className='text-white bg-[#342a52] mt-20 p-3 shadow-lg font-serif '>
      <div className='flex items-center justify-between'>
        <div className='flex justify-center items-center space-x-3'>
          <FaCopyright />
          <div>All rights reserved</div>
        </div>
        <div className='text-center hidden md:block tracking-wider'>
          Thank you for visiting my website!😀
        </div>
        <div className='flex flex-wrap justify-center space-x-5 xl:justify-evenly 2xl:space-x-5'>
          <Link
            href='https://www.linkedin.com/in/prabin-basnet/'
            target='blank'
          >
            <FaLinkedin />
          </Link>
          <Link href='https://github.com/prabinbasnet09' target='blank'>
            <FaGithub />
          </Link>
          <Link href='mailto:prabinbasnet09@gmail.com'>
            <SiGmail />
          </Link>
        </div>
      </div>
    </div>
  );
}
