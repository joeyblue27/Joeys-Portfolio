// imports react
import React from 'react';
// imports project function from project.js

// imports screenshots of each project
/* import quizcr8r from '../assets/images/QuizCr8r.png';
import blog from '../assets/images/Blog.png';
import weatherforecast from '../assets/images/WeatherForecast.png';
import wordsearch from '../assets/images/WordSearch.png';
import noteskeep from '../assets/images/NotesKeep.png';
import workdayscheduler from '../assets/images/WorkDayScheduler.png';
import recipes from '../assets/images/recipes.png'; */
// styles object for html
const styles = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    maxHeight: '150%',
    paddingBottom: '100px',
    backgroundColor: 'darkslategray',
  }
};
// projects array that contains all project objects
const projects = [
  {
    id: '0',
    name: 'Blog',
    info: 'This is a basic blog site where users can log in, write posts, and comment on other posts.',
    picture: blog,
    languages: 'React, Bootstrap, CSS',
    repo: 'https://github.com/hvansalisbury/Howards-Portfolio',
    link: 'https://hvansalisbury.github.io/Howards-Portfolio/',
  },
  {
    id: '1',
    name: 'Quiz Cr8r',
    info: 'Quiz creating app that allows user to create and take quizzes.',
    picture: quizcr8r,
    languages: 'React, Bootstrap, CSS',
    repo: 'https://github.com/HumzaShaukat/QuizCR8R',
    link: 'https://intense-forest-76320.herokuapp.com/',
  },
  {
    id: '2',
    name: 'Word Search Tool',
    info: 'A tool to help you find words. This will return synonyms, rhymes, and antonyms as well as pronunciations and definitions.',
    picture: wordsearch,
    languages: 'React, Bootstrap, CSS',
    repo: 'https://github.com/cmcclay77/super-team-project',
    link: 'https://cmcclay77.github.io/super-team-project/',
  },
  {
    id: '3',
    name: '5-day Weather Forecast',
    info: 'A weather forecast app that allows you to search for a city and returns the forecast.',
    picture: weatherforecast,
    languages: 'React, Bootstrap, CSS',
    repo: 'https://github.com/hvansalisbury/5-day-weather-forecast',
    link: 'https://hvansalisbury.github.io/5-day-weather-forecast/',
  },
  {
    id: '4',
    name: 'NotesKeep',
    info: 'A note taking app that stores the data so you can retreive the notes when you go back to the site.',
    picture: noteskeep,
    languages: 'React, Bootstrap, CSS',
    repo: 'https://github.com/hvansalisbury/noteskeep',
    link: 'https://limitless-depths-43205.herokuapp.com/',
  },
  {
    id: '5',
    name: 'Work Day Scheduler',
    info: 'A scheduling app that keeps track of your work day activities. The hour blocks are color coded according to the past, present, and future.',
    picture: workdayscheduler,
    languages: 'React, Bootstrap, CSS',
    repo: 'https://github.com/hvansalisbury/Work-Day-Scheduler',
    link: 'https://hvansalisbury.github.io/Work-Day-Scheduler/',
  },
  {
    id: '6',
    name: 'Family Recipe Box',
    info: 'This a database to store all of your family recipes. You can view, add, edit, and delete recipes',
    picture: recipes,
    languages: 'React, Bootstrap, CSS',
    repo: 'https://github.com/hvansalisbury/Family-Recipe-Box',
    link: 'https://family-recipe-box-8675309.herokuapp.com/',
  },
];
// portfolio function that creates html to be rendered in portfolio state
function Portfolio() {
  // returns portfolio html and calls the project function from project.js to generate html for each project card
  return (
    <section style={styles.section}>
      <Project projects={projects} />
    </section>
  );
};
// exports portfolio function
export default Portfolio;