import './App.css';
import Navbar from './Components/Navbar';
import Heros from './Components/Heros';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Specialty from './Components/Specialty';
import Contact from './Components/Contact';
import Myskills from './Components/Myskills';
import About from './Components/About';


function App() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div>
        <Heros/>
      </div>
      <div>
      <About/>
      </div>
      <div>
      <Myskills/>
      </div>
      <div>
      <Projects/>
      </div>
      <div>
      <Experience/>
      </div>
      <div>
      <Specialty/>
      </div>
      <div>
      <Contact/>
      </div>
    </>
  );
}

export default App;
