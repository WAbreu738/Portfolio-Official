import timeline from '../../../assets/projects/timeline.png'
import wineanddine from '../../../assets/projects/wineanddine.png'
import JATE from '../../../assets/projects/JATE.png'
import techblog from '../../../assets/projects/techblog.png'
import weatherapp from '../../../assets/projects/weatherapp.png'
import battlebrain from '../../../assets/projects/battlebrain.png'

import Project from './Project';

const projectData = [
  {
    title: "Battle Brain",
    class: "flex-col lg:flex-row mb-28",
    subText: "This trivia web application lets you and a friend compete in various trivia categories to see who comes out on top. Answer quickly and correctly to reduce your opponent's health. The last one standing wins! There is also a single-player mode to challenge the leaderboard and answer the most questions in a row.",
    demoURL: "https://nameless-inlet-80123-f3bf2fedf73b.herokuapp.com/",
    repoURL: "https://github.com/WAbreu738/BATTLE_BRAIN",
    image: battlebrain
  },
  

  {
    title: "Wine & Dine",
    class: "flex-col lg:flex-row-reverse mb-28",
    subText: "This project is aimed at providing users with a platform to discover new recipe ideas with wine pairing suggestions. The application works through offering generated recommendations and recipes based off of user input data containing ingredients and an option to select a wine or cocktail.",
    demoURL: "https://wabreu738.github.io/Wine_and_Dine/",
    repoURL: "https://github.com/WAbreu738/recipe-app-group-project",
    image: wineanddine
  },
  {
    title: "Time-Track",
    class: "flex-col lg:flex-row mb-28",
    subText: "TimeTrack is a dynamic web application designed to empower users in preserving and reliving their most cherished memories. With TimeTrack, users can seamlessly transform their scattered moments into captivating narratives, effortlessly weaving together the threads of their lives.",
    demoURL: "https://guarded-scrubland-03267-83032e1fc290.herokuapp.com/",
    repoURL: "https://github.com/WAbreu738/timeline_database",
    image: timeline
  },
  {
    title: "Weather App",
    class: "flex-col lg:flex-row-reverse mb-28",
    subText: "This web application provides a weather forecast for any city worldwide. Users can input their desired city, and the app retrieves the current weather conditions along with a 5-day forecast. The app also logs the user's inputted cities, creating a history for easy reference.",
    demoURL: "https://wabreu738.github.io/weather-forecast/",
    repoURL: "https://github.com/WAbreu738/weather-forecast",
    image: weatherapp
  },
  {
    title: "The Tech Blog",
    class: "flex-col lg:flex-row mb-28",
    subText: "Tech Blog is a platform where users can create an account and enjoy dynamic blog post features tailored for the tech community. Share your insights, discoveries, and experiences in the ever-evolving world of technology. The Tech Blog provides an intuitive interface to create, update, and delete blog posts effortlessly.",
    demoURL: "https://shrouded-plateau-17923-163bcd4dc95e.herokuapp.com/",
    repoURL: "https://github.com/WAbreu738/Tech_Blog",
    image: techblog
  },
  {
    title: "JATE Text Editor",
    class: "flex-col lg:flex-row-reverse",
    subText: "This PWA Text Editor is a progressive web application that allows users to write and save JavaScript code both online and offline. Built using modern web technologies, this application can be installed on your device and provides a seamless, responsive experience.",
    demoURL: "https://lit-spire-27113-fae93770a628.herokuapp.com/",
    repoURL: "https://github.com/WAbreu738/PWA_TextEditor",
    image: JATE
  },
];



const ProjectData = () => {
  return (
    <div>
      {projectData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectData;

