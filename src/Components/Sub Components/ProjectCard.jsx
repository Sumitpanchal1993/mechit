import React, { useState } from "react";
import "./ProjectCard.css";



function ProjectCard({item}) {
  const [hide, setHide] = useState(true)

  const handlehover =()=>{
    setHide(true)
  }
  const handlehoverout =()=>{
    setHide(false)
  }

 
  return (
    <>
      <div className="projectCardBase flex" onMouseOver={handlehover} onMouseOut={handlehoverout}>        
        {hide ? <OverlapCard item ={item}/>: <img src={item.image} alt="" /> }
      </div>
    </>
  );
}

export default ProjectCard;



//new function created to show the card overlap

function OverlapCard ({item}){
  return(
    <div className="overlapCard flex">
          <h2>{item.project}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolore.</p>
          <a href={item.link}>
          <button>Visit App</button>

          </a>
        </div>
    
  )
}
