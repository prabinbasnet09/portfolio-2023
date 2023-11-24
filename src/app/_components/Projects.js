'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/constants';
import { FaLink } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projectVariants = index => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25 * index,
    },
  },
});

export default function Projects() {
  return (
    <div className='pt-10 pb-28 p-5 text-black bg-[#f3efef]' id='projects'>
      <div className='pb-10 text-center mt-16 mb-16 font-bold text-4xl xl:text-6xl'>
        <div>Project Gallery</div>
      </div>
      <div className='mx-auto max-w-[1800px] grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center'>
        {projects.map((project, index) => {
          return (
            <motion.div
              variants={projectVariants(index)}
              initial='hidden'
              whileInView='visible'
              custom={index}
              className='flex flex-col h-auto p-3 rounded-lg border shadow-2xl cursor-pointer bg-[#fff]'
              key={index}
            >
              <div className='max-h-[300px] max-w-[600px] overflow-hidden'>
                <Image
                  src={project.image}
                  alt='Project picture'
                  width={600}
                  height={300}
                  className='rounded-lg shadow-lg object-fit'
                  unoptimized={true}
                />
              </div>
              <div className='text-[#ae67fb] font-bold text-2xl p-4'>
                {project.title}
              </div>
              <div className='pl-5 pr-3 font-mono'>{project.description}</div>
              <Link
                className='flex flex-wrap items-center justify-start p-5 font-thin hover:underline '
                href={project.github}
                target='blank'
              >
                <FaLink className='pr-2 text-[25px]' />
                Github Repository
              </Link>
              <div className='pl-5 pb-5  grid grid-cols-2 space-y-1 font-mono '>
                {project.technologies.map((technology, index) => {
                  return (
                    <div
                      key={index}
                      className='flex flex-wrap items-center justify-start '
                    >
                      <FaCheckCircle className='pr-3 text-[25px]' />
                      {technology}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
