import React, { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const classes = `transition-opacity duration-1000
		${isVisible ? "opacity-100" : "opacity-0"
    }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

function Project({ project }) {

  return (
    <RevealOnScroll>
      <div className={`flex ${project.class} bg-white rounded`}>
        <div class="lg:w-1/2">
          <img src={project.image} alt={project.title} className="object-cover object-center lg:scale-110 h-90 lg:h-full rounded-b-none border lg:rounded-lg" />
        </div>
        <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
          <h2 class="text-3xl text-gray-800 font-bold">
            {project.title}
          </h2>
          <p class="mt-4 text-gray-600">
            {project.subText}
          </p>
          <div class="mt-8 flex justify-around">
            <a href={project.demoURL} class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded hover:text-indigo-600 duration-500">Explore Page</a>
            <a href={project.repoURL} class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded hover:text-indigo-600 duration-500"> See Repo</a>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default Project;
