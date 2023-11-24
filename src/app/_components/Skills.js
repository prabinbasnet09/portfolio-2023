'use client';
import { once } from 'events';
import TypingEffect from '../utils/TypingEffect';
import { motion } from 'framer-motion';

const content = 'ls ';

export default function Skills() {
  return (
    <div className='pt-16 pb-20' id='skills'>
      <div className='text-center font-bold text-4xl xl:text-6xl pb-4'>
        Technical Toolbox
      </div>
      <div className='mt-10 sm:m-20 flex flex-col items-center justify-center font-extralight sm:font-light  '>
        <div className='bg-black m-3 pb-5 min-w-[340px] md:w-full 2xl:max-w-[800px] 4xl:max-w-[1200px] flex-grow '>
          <div className='bg-[#161b22]'>
            <div className='flex justify-between w-[8vh] sm:w-[6vh] h-8 items-center ml-5'>
              <div className='bg-green-300 w-[1.5vh] h-[1.5vh] sm:w-[1vh] sm:h-[1vh] rounded-full'></div>
              <div className='bg-orange-300 w-[1.5vh] h-[1.5vh] sm:w-[1vh] sm:h-[1vh] rounded-full'></div>
              <div className='bg-red-500 w-[1.5vh] h-[1.5vh] sm:w-[1vh] sm:h-[1vh] rounded-full'></div>
            </div>
          </div>
          <div className='flex space-x-3 p-5'>
            <div className='flex space-x-0'>
              <div className='relative'>
                <div className='bg-green-500 rounded-sm pl-1 pr-8 relative'>
                  C:\Users\pbasnet\Documents\Skills
                </div>
                <div
                  className='absolute top-0 right-0 h-full bg-black w-4'
                  style={{ transform: 'skewX(30deg)' }}
                ></div>
                <div
                  className='absolute top-0 right-0 h-full bg-black w-4'
                  style={{ transform: 'skewX(-30deg)' }}
                ></div>
              </div>
              <div className='pl-1 2xl:text-lg'>
                <TypingEffect content={content} speed={10} />
              </div>
            </div>
          </div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 10,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial='hidden'
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            whileInView='visible'
          >
            <div className='flex justify-center items-center pb-5 text-sm 2xl:text-md'>
              Directory: C:\Users\pbasnet\Documents\Skills
            </div>

            <div className='flex justify-around font-extralight text-sm 2xl:text-md'>
              <div className='flex flex-col'>
                <div>Last updated</div>
                <div>-------------</div>
                <ul>
                  <li>5/10/2023</li>
                  <li>6/11/2023</li>
                  <li>7/12/2023</li>
                  <li>8/13/2023</li>
                  <li>9/14/2023</li>
                  <li>10/15/2023</li>
                  <li>11/16/2023</li>
                  <li>1/17/2023</li>
                  <li>12/18/2023</li>
                  <li>2/18/2023</li>
                  <li>3/18/2023</li>
                  <li>11/24/2023</li>
                  <li>11/24/2023</li>
                  <li>11/24/2023</li>
                </ul>
              </div>
              <div>
                <div>Length Name</div>
                <div>---------------</div>
                <ul>
                  <li>Next.js</li>
                  <li>React</li>
                  <li>Java</li>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Spring Boot 3</li>
                  <li>.NET</li>
                  <li>Tailwind CSS</li>
                  <li>SASS</li>
                  <li>AWS</li>
                  <li>Azure</li>
                  <li>JavaScript</li>
                  <li>ASP.NET Core</li>
                  <li>C#</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
