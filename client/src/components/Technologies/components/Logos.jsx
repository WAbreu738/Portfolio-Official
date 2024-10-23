import React from 'react';
import HTML from '../../../assets/logos/HTML.png';
import CSS from '../../../assets/logos/CSS.png';
import JS from '../../../assets/logos/JS.png';
import Bootstrap from '../../../assets/logos/Bootstrap.png';
import Tailwind from '../../../assets/logos/Tailwind.png';
import ReactLogo from '../../../assets/logos/React.png';
import GraphQL from '../../../assets/logos/GraphQL.png';
import Mongodb from '../../../assets/logos/Mongodb.png';
import Node from '../../../assets/logos/Node.png';
import Postgresql from '../../../assets/logos/Postgresql.png';
import Vite from '../../../assets/logos/Vitejs.png';
import Webpack from '../../../assets/logos/webpack.png';
import SQL from '../../../assets/logos/SQL.png';
import './Logos.css'; // Import the CSS file for custom styling

const technologies = [
  { src: HTML, class: '' },
  { src: CSS, class: 'css-logo' },
  { src: JS, class: 'js-logo' },
  { src: ReactLogo, class: '' },
  { src: Bootstrap, class: '' },
  { src: Tailwind, class: '' },
  { src: Node, class: 'node-logo' },
  { src: GraphQL, class: '' },
  { src: Mongodb, class: '' },
  { src: Postgresql, class: '' },
  { src: Vite, class: '' },
  { src: Webpack, class: '' },
  { src: SQL, class: 'sql-logo' },
];

const Logos = () => {
  return (
    <div>
      {/* <div className="scroll-container">
        <div className="carousel-primary">
          {technologies.map((tech, index) => (
            <div key={index} className="carousel-item">
              <img src={tech.src} alt={`Technology ${index}`} className={`technology-image ${tech.class}`} />
            </div>
          ))}
        </div>
        <div className="carousel-secondary">
          {technologies.map((tech, index) => (
            <div key={index} className="carousel-item">
              <img src={tech.src} alt={`Technology ${index}`} className={`technology-image ${tech.class}`} />
            </div>
          ))}
        </div>
      </div> */}

      <div className="flex overflow-hidden space-x-16 group">
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          <img loading="lazy" src={HTML} class="max-w-none h-16" />
          <img loading="lazy" src={CSS} class="max-w-none h-16" />
          <img loading="lazy" src={JS} class="max-w-none h-16" />
          <img loading="lazy" src={ReactLogo} class="max-w-none h-16" />
          <img loading="lazy" src={Bootstrap} class="max-w-none h-16" />
          <img loading="lazy" src={Tailwind} class="max-w-none h-16" />
          <img loading="lazy" src={Node} class="max-w-none h-16" />
          <img loading="lazy" src={GraphQL} class="max-w-none h-16" />
          <img loading="lazy" src={Mongodb} class="max-w-none h-16" />
          <img loading="lazy" src={Postgresql} class="max-w-none h-16" />
          <img loading="lazy" src={Vite} class="max-w-none h-16" />
          <img loading="lazy" src={Webpack} class="max-w-none h-16" />
          <img loading="lazy" src={SQL} class="max-w-none h-16" />
        </div>
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
          <img loading="lazy" src={HTML} class="max-w-none h-16" />
          <img loading="lazy" src={CSS} class="max-w-none h-16" />
          <img loading="lazy" src={JS} class="max-w-none h-16" />
          <img loading="lazy" src={ReactLogo} class="max-w-none h-16" />
          <img loading="lazy" src={Bootstrap} class="max-w-none h-16" />
          <img loading="lazy" src={Tailwind} class="max-w-none h-16" />
          <img loading="lazy" src={Node} class="max-w-none h-16" />
          <img loading="lazy" src={GraphQL} class="max-w-none h-16" />
          <img loading="lazy" src={Mongodb} class="max-w-none h-16" />
          <img loading="lazy" src={Postgresql} class="max-w-none h-16" />
          <img loading="lazy" src={Vite} class="max-w-none h-16" />
          <img loading="lazy" src={Webpack} class="max-w-none h-16" />
          <img loading="lazy" src={SQL} class="max-w-none h-16" />
        </div>
      </div>


    </div>
  );
};

export default Logos;
