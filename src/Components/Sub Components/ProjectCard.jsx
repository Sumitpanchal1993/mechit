import React, { useState } from "react";
import "./ProjectCard.css";



function ProjectCard({item}) {
  const [hide, setHide] = useState(false)

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
          <h3>{item.title}</h3>
            <p>{item.detail} Technology Used : {item.tech.join(', ')}</p>
            <a href={item.link}>
          <button>Visit App</button>
          </a>
        </div>
    
  )
}
