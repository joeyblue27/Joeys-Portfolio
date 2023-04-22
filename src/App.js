// importing app.css
import './App.css';
import './assets/css/style.css';
// importing our static header and footer
import Footer from './components/Footer';
import Header from './components/Header';
// importing all of our different states that get displayed when we click on them in the nav bar
import AboutMe from './components/AboutMe';
// importing our usestate function from react
import { useState } from 'react';
// app function that will get exported to index.js
function App() {
  // using our usestate function to handle tab changes, and set default state to about
  const [currentTab, setCurrentTab] = useState('about');
  // switch function to determine which tab will get rendered depending on which option is clicked, default is about me
  const renderTab = () => {
    switch (currentTab) {
      case 'about':
        return <AboutMe />;
/*       case 'contact':
        return <ContactForm />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      default:
        return <AboutMe />; */
    };
  };  
  return (
    
    <div>
      <div>
        <Header
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>
      <div>
        {renderTab()}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
// exports app function.
export default App;