import "./App.css";
import Navbar from "./Components/Navbar";
import Heros from "./Components/Heros";
import Projects from "./Components/Projects";
// import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Myskills from "./Components/Myskills";
import About from "./Components/About";
import Education from "./Components/Education";
import SmallApps from "./Components/Small_Apps";


function App() {
  

  return (
    <>
      <Navbar />
      <Heros />
      <About/>
      <Myskills />
      <Projects />
      <SmallApps />
      <Education/>
      {/* <Experience /> */}
      <Contact />
  
    </>
  );
}

export default App;
