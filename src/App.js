import "./App.css";
import Navbar from "./Components/Navbar";
import Heros from "./Components/Heros";
import Projects from "./Components/Projects";
// import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Myskills from "./Components/Myskills";
import About from "./Components/About";
import Education from "./Components/Education";

function App() {
  return (
    <>
      <Navbar />
      <Heros />
      <About />
      <Myskills />
      <Projects />
      <Education/>
      {/* <Experience /> */}
      <Contact />
  
    </>
  );
}

export default App;
