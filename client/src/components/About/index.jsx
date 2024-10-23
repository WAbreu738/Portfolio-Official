import React from 'react';
import AboutText from './components/AboutText';

import ProfPic from './components/ProfilePic';

const About = () => {
  return (
    <section id="about" className="container mx-auto py-10">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 m-4 md:m-10">
        <div className="flex flex-col md:flex-row items-center">
          <ProfPic />
          <AboutText />
        </div>
       
      </div>
    </section>
  );
};

export default About;
