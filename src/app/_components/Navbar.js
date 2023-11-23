'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { CiMenuBurger } from 'react-icons/ci';
import { FaBurger } from 'react-icons/fa6';
import { PiHamburgerThin } from 'react-icons/pi';
import MenuNavigation from './MenuNavigation';
import { IoMdClose } from 'react-icons/io';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', title: 'Home' },
    { href: '#experiences', title: 'Experience' },
    { href: '#skills', title: 'Skills' },
    { href: '#projects', title: 'Projects' },
    { href: '#achievements', title: 'Achievements' },
    { href: '#contact', title: 'Contact' },
  ];

  const handleMenu = e => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 p-3 shadow-lg bg-[#261f3a]'>
      <div className='flex justify-between '>
        <div className='font-bold text-lg'>Prabin Basnet</div>
        <div
          className='sm:hidden flex justify-center items-center text-xl font-bold hover:cursor-pointer'
          onClick={handleMenu}
        >
          {isMenuOpen ? <IoMdClose /> : <PiHamburgerThin />}
        </div>
        <div className='menu hidden sm:flex p-0 font-thin space-x-4'>
          {navLinks.map((link, index) => {
            return <NavLink href={link.href} title={link.title} key={index} />;
          })}
        </div>
      </div>
      {isMenuOpen ? (
        <div
          className=' flex flex-col items-center justify-center font-thin sm:hidden '
          onClick={handleMenu}
        >
          {navLinks.map((link, index) => {
            return (
              <MenuNavigation
                href={link.href}
                title={link.title}
                key={index}
                onClick={handleMenu}
              />
            );
          })}
        </div>
      ) : null}
    </nav>
  );
}
