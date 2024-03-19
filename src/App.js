import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Assly/Home";
import Projects from "./Assly/Projects";
import Contact from "./Assly/Contact";
import Experience from "./Assly/Experience";
import Qualification from "./Assly/Qualification";
import SmallProject from "./Assly/SmallProject";


function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/project" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/qualification" element={<Qualification />}></Route>
            <Route path="/smallprojects" element={<SmallProject />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
