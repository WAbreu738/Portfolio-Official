// src/components/Project.jsx
import React, { useState } from 'react';

function Project({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className="relative bg-white shadow-md rounded-md overflow-hidden"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <img src={project.image} alt={project.title} className="w-full h-50 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
      </div>
      {showDetails && (
        <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex flex-col items-center justify-center p-4">
          <p className="mb-12 text-center">{project.subText}</p>
          <div className="space-x-4">
            <a 
              href={project.demoURL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md"
            >
              Live Demo
            </a>
            <a 
              href={project.repoURL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md"
            >
              View Code
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;

