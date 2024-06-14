import React from 'react';
import ProjectData from './components/ProjectData';

function Portfolio() {
  return (
    <section id="project" className="px-2 py-20 w-full flex flex-col items-center mt-20 border-t-2 border-primary-light ">
      <div className="lg:mx-8 w-full lg:max-w-6xl lg:shadow-lg rounded-lg">
        <div className="text-center text-stone-200 text-4xl font-bold mb-28">
          PORTFOLIO
        </div>
        <ProjectData />
      </div>
    </section>
  );
}

export default Portfolio;
