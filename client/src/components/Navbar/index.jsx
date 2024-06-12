import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 text-white w-full z-50 shadow-md">
        <div className="container mx-auto flex justify-center py-6 px-5 space-x-8">
          <Link
            className="text-lg text-white hover:text-yellow-400 transition duration-300 cursor-pointer"
            to="hero"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="text-lg  text-white hover:text-yellow-400 transition duration-300 cursor-pointer"
            to="about"
            smooth={true}
            duration={500}
          >
            About Me
          </Link>
          <Link
            className="text-lg text-white hover:text-yellow-400 transition duration-300 cursor-pointer"
            to="portfolio"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="text-lg text-white hover:text-yellow-400 transition duration-300 cursor-pointer"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
