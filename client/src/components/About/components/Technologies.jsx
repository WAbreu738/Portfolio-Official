import HTML from '../../../assets/logos/HTML.png';
import CSS from '../../../assets/logos/CSS.png';
import JS from '../../../assets/logos/JS.png';
import Bootstrap from '../../../assets/logos/Bootstrap.png';
import Tailwind from '../../../assets/logos/Tailwind.png';
import ReactLogo from '../../../assets/logos/React.png';
import Express from '../../../assets/logos/Express.png';
import GraphQL from '../../../assets/logos/GraphQL.png';
import Mongodb from '../../../assets/logos/Mongodb.png';
import Node from '../../../assets/logos/Node.png';
import Postgresql from '../../../assets/logos/Postgresql.png';
import SQL from '../../../assets/logos/SQL.png';
import Vite from '../../../assets/logos/Vitejs.png';
import Webpack from '../../../assets/logos/webpack.png';

const technologies = [
    HTML,
    CSS,
    JS,
    ReactLogo,
    Bootstrap,
    Tailwind,
    Node,
    Express,
    GraphQL,
    Mongodb,
    Postgresql,
    SQL,
    Vite,
    Webpack,
  ];

const Technologies = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center py-2 px-4 bg-secondary-light dark:bg-secondary-dark rounded-lg shadow-md"
          >
            <img src={tech} alt={`Technology ${index}`} className="w-16 h-16" />
          </div>
        ))}
      </div>
    );
  };
  
  export default Technologies;

