'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/constants';
import {
  faLink,
  faCircleDot,
  faStar,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fireConfetti from './confetti';

export default function Projects() {
  return (
    <div className='pt-10 pb-28 p-5 text-black bg-[#f3efef]' id='projects'>
      <div className='pb-10 text-center mt-16 mb-16 font-bold text-4xl 2xl:text-6xl'>
        <div>Project Gallery</div>
      </div>
      <div className='mx-auto max-w-[1800px] grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center'>
        {projects.map((project, index) => {
          return (
            <div
              className='flex flex-col h-auto p-3 rounded-lg border shadow-2xl cursor-pointer bg-[#fff]'
              key={index}
            >
              <div className=''>
                <Image
                  src={project.image}
                  alt='Project picture'
                  width={600}
                  height={300}
                  className='rounded-lg shadow-lg'
                  unoptimized={true}
                />
              </div>
              <div className='text-[#ae67fb] font-bold text-2xl p-4'>
                {project.title}
              </div>
              <div className='pl-5 pr-3 font-mono'>{project.description}</div>
              <Link
                className='p-5 font-thin hover:underline'
                href={project.github}
                target='blank'
              >
                <FontAwesomeIcon
                  icon={faLink}
                  className='pr-2'
                ></FontAwesomeIcon>
                Github Repository
              </Link>
              <div className='pl-5 pb-5  grid grid-cols-2 space-y-1 font-mono '>
                {project.technologies.map((technology, index) => {
                  return (
                    <div key={index}>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className='pr-3'
                      ></FontAwesomeIcon>
                      {technology}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
