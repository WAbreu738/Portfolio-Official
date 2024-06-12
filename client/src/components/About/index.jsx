import React from 'react';
import AboutText from './components/AboutText'
import Technologies from './components/Technologies'
import ProfPic from './components/ProfilePic';

const About = () => {
  return (
      <section className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center">
          <ProfPic />
          <AboutText />
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">Technologies I Use</h3>
            <Technologies />
        </div>
      </section>
  );
};

export default About;
