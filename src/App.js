import "./App.css";
import Navbar from "./Components/Navbar";
import Heros from "./Components/Heros";
import Projects from "./Components/Projects";
// import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Myskills from "./Components/Myskills";
import About from "./Components/About";
import Education from "./Components/Education";
import { useState } from "react";



function App() {
  const [wid, setWid] = useState(0)
  const [hei, setHei] = useState(0)

  const detail = ()=>{
    setWid(window.innerWidth)
    setHei(window.innerHeight)
  }

  return (
    <>
      <Navbar />
      <Heros />
      <About/>
      <div>
        <button onClick={detail}> click Me</button>
        <h1>{wid}</h1>
        <h1>{hei}</h1>
      </div>
      <Myskills />
      <Projects />
      <Education/>
      {/* <Experience /> */}
      <Contact />
  
    </>
  );
}

export default App;
