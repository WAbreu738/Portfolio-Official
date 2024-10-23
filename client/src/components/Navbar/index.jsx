import React, { useState } from 'react';
import { Link } from 'react-scroll';
import resume from '../../assets/about/Wesley Abreu Resume.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white w-full z-50 shadow-md sticky top-0">
      <div className="container mx-auto flex justify-center items-center py-6 px-5 md:px-10">

        {/* Button for mobile view */}
        <button
          className="md:hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>

        {/* Navigation links for larger screens */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="hero"
            className="text-lg text-white hover:text-indigo-600 duration-500 transition cursor-pointer"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            to="about"
            className="text-lg text-white hover:text-indigo-600 duration-500 transition cursor-pointer"
            smooth={true}
            duration={500}
          >
            About Me
          </Link>
          <Link
            to="project"
            className="text-lg text-white hover:text-indigo-600 duration-500 transition cursor-pointer"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="contact"
            className="text-lg text-white hover:text-indigo-600 duration-500 transition cursor-pointer"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
          <a
            href={resume}
            className="text-lg text-white hover:text-indigo-600 duration-500 transition cursor-pointer"
            download="WesleyResume.pdf"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-5 pb-5 space-y-4">
          <Link
            to="hero"
            className="text-lg text-white hover:text-indigo-600 duration-500 transition cursor-pointer block"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            className="text-lg text-white hover:text-indigo-600 duration-500 transition cursor-pointer block"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            About Me
          </Link>
          <Link
            to="project"
            className="text-lg text-white hover:text-indigo-600 duration-500 transition cursor-pointer block"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="contact"
            className="text-lg text-white hover:text-indigo-600 duration-500 transition cursor-pointer block"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <a
            href={resume}
            className="text-lg text-white hover:text-indigo-600 duration-500 transition cursor-pointer block"
            download="WesleyResume.pdf"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
